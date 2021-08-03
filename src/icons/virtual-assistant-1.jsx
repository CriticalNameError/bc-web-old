import React from 'react';

function VirtualAssistant1(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="11" x2="53" y1="11" y2="11"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="11" x2="53" y1="51" y2="51"/>
		<path d="M2,37H13a4,4,0,0,0,4-4V28a3,3,0,0,1,6,0V40a3,3,0,0,0,6,0V22a3,3,0,0,1,6,0V40a3,3,0,0,0,6,0V28a3,3,0,0,1,6,0v5a4,4,0,0,0,4,4H62" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M11,43V57a5,5,0,0,0,5,5H48a5,5,0,0,0,5-5V43" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M53,31V7a5,5,0,0,0-5-5H16a5,5,0,0,0-5,5V31" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default VirtualAssistant1;