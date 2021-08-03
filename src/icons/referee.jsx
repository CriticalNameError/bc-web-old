import React from 'react';

function Referee(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<rect height="6" width="22" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="30" y="56"/>
		<path d="M49,56l3.917-13.317a12,12,0,0,0-.173-7.311L46.349,16.9A7.618,7.618,0,0,0,41,12h0" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M37,43V33a4,4,0,0,0-4-4h0a4,4,0,0,0-4,4V46c0,6,6,10,6,10" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polyline fill="none" points="41 28 41 2 11 2 11 42 23 42" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Referee;