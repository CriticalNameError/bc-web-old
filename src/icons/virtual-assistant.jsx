import React from 'react';

function VirtualAssistant(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="9" x2="39" y1="9" y2="9"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="9" x2="39" y1="37" y2="37"/>
		<path d="M2,26h9a4,4,0,0,0,4-4V18a3,3,0,0,1,6,0V28a3,3,0,0,0,6,0V20a3,3,0,0,1,6,0v2a4,4,0,0,0,4,4h9" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M39,21V6a4,4,0,0,0-4-4H13A4,4,0,0,0,9,6V21" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M9,31V42a4,4,0,0,0,4,4H35a4,4,0,0,0,4-4V31" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default VirtualAssistant;