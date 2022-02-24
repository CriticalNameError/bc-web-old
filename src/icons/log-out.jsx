import React from 'react';

function LogOut(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<line fill="none" strokeLinecap="butt" x1="36" x2="6" y1="24" y2="24"/>
		<polyline fill="none" points="16 34 6 24 16 14"/>
		<path d="M18,2H38a4,4,0,0,1,4,4V42a4,4,0,0,1-4,4H18" fill="none" stroke={fill}/>
	</g>
</svg>
	);
};

export default LogOut;