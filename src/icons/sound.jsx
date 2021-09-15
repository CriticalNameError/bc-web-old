import React from 'react';

function Sound(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<path d="M48.729,40.587a12.143,12.143,0,0,0,0-17.173" fill="none"/>
		<path d="M55.6,47.456a21.858,21.858,0,0,0,0-30.912" fill="none"/>
		<path d="M43,60,21,44H8a5,5,0,0,1-5-5V25a5,5,0,0,1,5-5H21L43,4Z" fill="none" stroke={fill}/>
	</g>
</svg>
	);
};

export default Sound;