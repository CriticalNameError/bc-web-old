import React from 'react';

function Buzz(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M40.064,51a9,9,0,0,1-16.128,0" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M62,53c0-5.1-3.4-11-10-14V23A20.059,20.059,0,0,0,32,3h0A20.059,20.059,0,0,0,12,23V39C5.4,42,2,47.9,2,53" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M62,53c0,4.2-13.445,8-30,8S2,57.2,2,53s13.445-8,30-8S62,48.8,62,53Z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Buzz;