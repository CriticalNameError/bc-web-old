import React from 'react';

function Sword(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<polyline fill="none" points="29 45 59 20 61 3 44 5 19 35" strokeLinecap="butt"/>
		<line fill="none" strokeLinecap="butt" x1="61" x2="28" y1="3" y2="36"/>
		<line fill="none" stroke={fill} x1="14" x2="3" y1="61" y2="50"/>
		<path d="M11.167,58.167l7.722-7.722a5,5,0,0,1,7.071,0l.929.929a5,5,0,0,0,7.071,0l.707-.707L13.333,29.333l-.707.707a5,5,0,0,0,0,7.072l.929.928a5,5,0,0,1,0,7.071L5.833,52.833" fill="none" stroke={fill} strokeLinecap="butt"/>
	</g>
</svg>
	);
};

export default Sword;