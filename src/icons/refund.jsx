import React from 'react';

function Refund(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M5.02,21.345A29.018,29.018,0,1,1,3,32" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M38.933,20.267A20.314,20.314,0,0,0,32,19.2c-3.68,0-8.533,1.6-8.533,5.867,0,8,17.066,4.3,17.066,12.8,0,4.229-4.192,5.866-8.533,5.866a20.6,20.6,0,0,1-8.533-1.6" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="6.022 4.959 5 21.351 20.689 15.897" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="32" x2="32" y1="16" y2="48"/>
	</g>
</svg>
	);
};

export default Refund;