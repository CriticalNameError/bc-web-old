import React from 'react';

function Fork(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="32" x2="32" y1="62" y2="3"/>
		<polyline fill="none" points="15 26 15 46 32 56" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polyline fill="none" points="22 13 32 3 42 13" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="5 36 15 26 25 36" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="37 46.059 49 39 49 19" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polyline fill="none" points="39 29 49 19 59 29" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Fork;