import React from 'react';

function Undo(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M3.716,39.716 C11.214,32.217,21.395,28,32,28s20.786,4.217,28.284,11.716" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="7.751,20.127 3.716,39.716 23.304,43.751 " stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Undo;