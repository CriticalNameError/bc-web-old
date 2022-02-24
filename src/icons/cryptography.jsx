import React from 'react';

function Cryptography(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<polyline fill="none" points="32 35 32 44 45 57" stroke={fill}/>
		<polyline fill="none" points="5 34 5 21 21 5 29 5" stroke={fill}/>
		<polyline fill="none" points="22.879 16.121 12 27 12 41 5 41" stroke={fill}/>
		<polyline fill="none" points="59 30 59 43 54.121 47.879" stroke={fill}/>
		<polyline fill="none" points="52 39 52 23 59 23" stroke={fill}/>
		<polyline fill="none" points="48.879 10.879 43 5 35 5 35 13 45 23 45 37 40 42"/>
		<polyline fill="none" points="15.107 53.134 21 59 37 59 19 41 19 31 27 23 35 23"/>
		<circle cx="51" cy="13" fill="none" r="3"/>
		<circle cx="32" cy="32" fill="none" r="3" stroke={fill}/>
		<circle cx="25" cy="14" fill="none" r="3" stroke={fill}/>
		<circle cx="52" cy="50" fill="none" r="3" stroke={fill}/>
		<circle cx="13" cy="51" fill="none" r="3"/>
	</g>
</svg>
	);
};

export default Cryptography;