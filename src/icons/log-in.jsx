import React from 'react';

function LogIn(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<line fill="none" strokeLinecap="butt" x1="5" x2="45" y1="32" y2="32"/>
		<polyline fill="none" points="32 19 45 32 32 45"/>
		<path d="M28,3H53a5,5,0,0,1,5,5V56a5,5,0,0,1-5,5H28" fill="none" stroke={fill}/>
	</g>
</svg>
	);
};

export default LogIn;