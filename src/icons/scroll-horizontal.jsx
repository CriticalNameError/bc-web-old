import React from 'react';

function ScrollHorizontal(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<line fill="none" strokeLinecap="butt" x1="39" x2="61" y1="15" y2="15"/>
		<line fill="none" strokeLinecap="butt" x1="20" x2="3" y1="15" y2="15"/>
		<line fill="none" stroke={fill} x1="26" x2="26" y1="33" y2="39"/>
		<polyline fill="none" points=" 53,7 61,15 53,23 "/>
		<polyline fill="none" points=" 11,7 3,15 11,23 "/>
		<path d="M33,31v-2.5 c0-1.933,1.567-3.5,3.5-3.5h0c1.933,0,3.5,1.567,3.5,3.5V31" fill="none" stroke={fill}/>
		<path d="M40,32v-1.5 c0-1.933,1.567-3.5,3.5-3.5h0c1.933,0,3.5,1.567,3.5,3.5V33" fill="none" stroke={fill}/>
		<path d="M47,32.5 c0-1.933,1.567-3.5,3.5-3.5h0c1.847,0,3.266,1.636,3.005,3.465L50,57H26c0-3.833-7-9.333-7-14v-7c0-1.657,1.343-3,3-3l4,0V10.5 C26,8.567,27.567,7,29.5,7h0c1.933,0,3.5,1.567,3.5,3.5V30" fill="none" stroke={fill}/>
	</g>
</svg>
	);
};

export default ScrollHorizontal;