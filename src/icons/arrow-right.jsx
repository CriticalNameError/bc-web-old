import React from 'react';

function ArrowRight(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="3" x2="61" y1="32" y2="32"/>
		<polyline fill="none" points="43,14 61,32 43,50 " stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default ArrowRight;