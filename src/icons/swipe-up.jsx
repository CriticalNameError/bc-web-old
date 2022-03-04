import React from 'react';

function SwipeUp(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<line fill="none" strokeLinecap="butt" x1="13" x2="13" y1="5" y2="35"/>
		<line fill="none" stroke={fill} x1="33" x2="33" y1="32" y2="38"/>
		<polyline fill="none" points=" 4,14 13,5 22,14 "/>
		<path d="M40,30v-2.5 c0-1.933,1.567-3.5,3.5-3.5h0c1.933,0,3.5,1.567,3.5,3.5V30" fill="none" stroke={fill}/>
		<path d="M47,31v-1.5 c0-1.933,1.567-3.5,3.5-3.5h0c1.933,0,3.5,1.567,3.5,3.5V32" fill="none" stroke={fill}/>
		<path d="M54,31.5 c0-1.933,1.567-3.5,3.5-3.5h0c1.847,0,3.266,1.636,3.005,3.465L57,56H33c0-3.833-7-9.333-7-14v-7c0-1.657,1.343-3,3-3l4,0V9.5 C33,7.567,34.567,6,36.5,6h0C38.433,6,40,7.567,40,9.5V29" fill="none" stroke={fill}/>
	</g>
</svg>
	);
};

export default SwipeUp;