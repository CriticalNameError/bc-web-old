import React from 'react';

function Trophy(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M14.705,28C9.5,28,5,24,5,17V7h9" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M50,7h9V17c0,7-4.5,11-9.7,11" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M32,41h0A18,18,0,0,1,14,23V3H50V23A18,18,0,0,1,32,41Z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M18,61c0-4.418,3-8,10-8h8c7,0,10,3.582,10,8Z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="32" x2="32" y1="53" y2="46"/>
	</g>
</svg>
	);
};

export default Trophy;