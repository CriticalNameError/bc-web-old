import React from 'react';

function Wheel(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M32,24c-5,0-9,4-14,4H10.363" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M32,40c-5,0-9-4-14-4H10.363" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M24,32c0,5,4,9,4,14v7.637" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M40,32c0,5-4,9-4,14v7.637" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M32,24c5,0,9,4,14,4h7.637" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M32,40c5,0,9-4,14-4h7.637" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<circle cx="32" cy="32" fill="none" r="30" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="32" cy="32" fill="none" r="22" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="32" cy="32" fill="none" r="8" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Wheel;