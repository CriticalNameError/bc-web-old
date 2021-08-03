import React from 'react';

function Traffic(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<polyline fill="none" points="14 37 22 45.182 30 37" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="34 27 42 19 50 27" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="22" x2="22" y1="45" y2="4.771"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="42" x2="42" y1="19" y2="59.229"/>
		<circle cx="32" cy="32" fill="none" r="29" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Traffic;