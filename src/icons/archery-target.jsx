import React from 'react';

function ArcheryTarget(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M48.255,29 C49.38,31.779,50,34.817,50,38c0,13.255-10.745,24-24,24S2,51.255,2,38s10.745-24,24-24c3.182,0,6.22,0.619,8.999,1.744" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="26" cy="38" fill="none" r="13" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="26" x2="58" y1="38" y2="6"/>
		<polygon fill="none" points=" 51,13 49,3 41,11 43,21 53,23 61,15 " stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default ArcheryTarget;