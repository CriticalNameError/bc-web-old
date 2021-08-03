import React from 'react';

function Drops(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M14,44.5 C14,33.7,32,16,32,16s18,17.7,18,28.5C50,55.6,40.8,62,32,62S14,55.6,14,44.5z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M46,16.4 C46,11.7,54,4,54,4s8,7.7,8,12.4c0,4.9-4.1,7.6-8,7.6S46,21.2,46,16.4z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M2,16.4 C2,11.7,10,4,10,4s8,7.7,8,12.4c0,4.9-4.1,7.6-8,7.6S2,21.2,2,16.4z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Drops;