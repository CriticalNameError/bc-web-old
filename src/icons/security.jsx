import React from 'react';

function Security(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<line fill="none" strokeLinecap="butt" x1="32" x2="32" y1="60" y2="4"/>
		<line fill="none" strokeLinecap="butt" x1="6.978" x2="57.022" y1="32" y2="32"/>
		<path d="M32,4c-8,6-20,10-28,10 c0,18.666,9.334,38,28,46c18.666-8,28-27.334,28-46C52,14,40,10,32,4z" fill="none" stroke={fill}/>
	</g>
</svg>
	);
};

export default Security;