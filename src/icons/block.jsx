import React from 'react';

function Block(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="32" x2="32" y1="30.595" y2="61.5"/>
		<polyline fill="none" points="6 16.5 32 30.595 58 16.5" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polygon fill="none" points="58 47.5 58 16.5 32 2.5 6 16.5 6 47.5 32 61.5 58 47.5" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Block;