import React from 'react';

function WhiteHouse(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<polyline fill="none" points=" 12,62 2,62 2,48 10,48 " stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points=" 52,62 62,62 62,48 54,48 " stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points=" 36,62 36,52 28,52 28,62 " stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="32" x2="32" y1="14" y2="2"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="10" x2="54" y1="30" y2="30"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="10" x2="54" y1="38" y2="38"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="19" x2="19" y1="62" y2="38"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="45" x2="45" y1="62" y2="38"/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="28" x2="36" y1="45" y2="45"/>
		<rect height="4" width="8" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="32" y="4"/>
		<polygon fill="none" points="54,30 54,62 10,62 10,30 32,14 " stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default WhiteHouse;