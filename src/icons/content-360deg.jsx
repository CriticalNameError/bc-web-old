import React from 'react';

function Content360deg(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M11.056,20.549C5.472,23.455,2,27.51,2,32c0,8.837,13.431,16,30,16s30-7.163,30-16S48.569,16,32,16a55.293,55.293,0,0,0-7.3.48" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M43.451,52.944C40.545,58.528,36.49,62,32,62c-8.837,0-16-13.431-16-30S23.163,2,32,2,48,15.431,48,32a55.293,55.293,0,0,1-.48,7.3" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="32" cy="32" fill="none" r="8" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Content360deg;