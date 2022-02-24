import React from 'react';

function Flag(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<line fill="none" stroke={fill} x1="9" x2="9" y1="2" y2="62"/>
		<polyline fill="none" points="9,2 56,2 56,35 9,35 " stroke={fill}/>
	</g>
</svg>
	);
};

export default Flag;