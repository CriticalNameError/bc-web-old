import React from 'react';

function TriangleUp1(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill}>
		<path d="M5,51H59a1,1,0,0,0,.829-1.56l-27-40a1.039,1.039,0,0,0-1.658,0l-27,40A1,1,0,0,0,5,51Z" fill={fill}/>
	</g>
</svg>
	);
};

export default TriangleUp1;