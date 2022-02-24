import React from 'react';

function Compass05(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<circle cx="32" cy="32" fill="none" r="30" stroke={fill}/>
		<circle cx="32" cy="32" fill="none" r="1" stroke={secondaryfill}/>
		<circle cx="32" cy="32" r="1" stroke="none" strokeLinejoin="miter"/>
		<polygon fill="none" points=" 46,18 37,37 18,46 27,27 " stroke={secondaryfill}/>
	</g>
</svg>
	);
};

export default Compass05;