import React from 'react';

function Referee1(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M28,35V27.5A3.5,3.5,0,0,0,24.5,24h0A3.5,3.5,0,0,0,21,27.5V38c0,4,4,8,4,8H36l3.9-10.926a12,12,0,0,0,.487-6.281L37.771,15.05A6.449,6.449,0,0,0,33,10h0" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polyline fill="none" points="33 23 33 2 9 2 9 34 15 34" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Referee1;