import React from 'react';

function WaterWave(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M2,54a13.865,13.865,0,0,0,10.227-4.5,13.872,13.872,0,0,0,20.455,0,13.893,13.893,0,0,0,19.773.71A13.8,13.8,0,0,0,62,54" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M2,40H4.727c16.364,0,12.841-17.48,23.224-26.151C39.346,4.334,49.661,15.2,51.28,17.236,39.952,19.269,42.909,40,59.273,40H62" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default WaterWave;