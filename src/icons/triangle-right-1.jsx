import React from 'react';

function TriangleRight1(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill}>
		<path d="M54.56,31.171l-40-27A1,1,0,0,0,13,5V59a1,1,0,0,0,1.56.829l40-27a1,1,0,0,0,0-1.658Z" fill={fill}/>
	</g>
</svg>
	);
};

export default TriangleRight1;