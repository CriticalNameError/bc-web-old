import React from 'react';

function Road1(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M22,28h-7C7.82,28,2,33.82,2,41v0 c0,7.18,5.82,13,13,13h19" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M32,2h17 c7.18,0,13,5.82,13,13v0c0,7.18-5.82,13-13,13h-7" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="27,47 34,54 27,61 " stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="21" x2="25" y1="2" y2="2"/>
		<circle cx="32" cy="28" fill="none" r="10" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Road1;