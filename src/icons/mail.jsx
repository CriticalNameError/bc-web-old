import React from 'react';

function Mail(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<polyline fill="none" points="4.467 9.467 33 35 59.508 9.439" strokeLinecap="butt"/>
		<path d="M3,13V51a5,5,0,0,0,5,5H56a5,5,0,0,0,5-5V13a5,5,0,0,0-5-5H8A5,5,0,0,0,3,13Z" fill="none" stroke={fill}/>
	</g>
</svg>
	);
};

export default Mail;