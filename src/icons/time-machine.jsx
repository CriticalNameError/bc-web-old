import React from 'react';

function TimeMachine(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<polyline fill="none" points="32 12 32 32 49 32" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="6.022 59.041 5 42.649 20.689 48.103" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M5.02,42.655A29.018,29.018,0,1,0,3,32" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default TimeMachine;