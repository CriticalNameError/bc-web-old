import React from 'react';

function ATime(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<path d="M41.697,41.336 C38.01,40.559,33.46,40,28,40c-11.14,0-18.494,2.331-22.453,4.087C3.379,45.048,2,47.196,2,49.567V60h32" fill="none" stroke={fill} strokeLinecap="butt"/>
		<path d="M14,16 c0-7.732,6.268-14,14-14s14,6.268,14,14s-6.268,16-14,16S14,23.732,14,16z" fill="none" stroke={fill}/>
		<circle cx="50" cy="50" fill="none" r="12"/>
		<polyline fill="none" points=" 50,45 50,50 55,50 "/>
	</g>
</svg>
	);
};

export default ATime;