import React from 'react';

function VirtualReality1(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<polyline fill="none" points="18 23 32 29 46 23" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="32" x2="32" y1="29" y2="47"/>
		<polygon fill="none" points="46 23 32 17 18 23 18 41 32 47 46 41 46 23" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M2,32A30,30,0,0,1,32,2h4L30,8" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M62,32A30,30,0,0,1,32,62H28l6-6" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default VirtualReality1;