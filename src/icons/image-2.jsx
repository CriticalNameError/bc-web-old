import React from 'react';

function Image2(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<polygon fill="none" points="4,43 12,27 20,33 32,17 44,43 " stroke={fill}/>
		<circle cx="17" cy="10" fill="none" r="5"/>
	</g>
</svg>
	);
};

export default Image2;