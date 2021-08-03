import React from 'react';

function PropertySold(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<rect height="27" width="58" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="3" y="8"/>
		<polyline fill="none" points="36 40 36 62 28 62 28 40" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="36 8 36 2 28 2 28 8" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M18.822,24.051a2.951,2.951,0,0,1-1.113,2.437,4.835,4.835,0,0,1-3.1.891,7.279,7.279,0,0,1-3.234-.688v-2.25a13.311,13.311,0,0,0,1.957.727,5.762,5.762,0,0,0,1.465.211,2.082,2.082,0,0,0,1.222-.3,1.041,1.041,0,0,0,.426-.906,1,1,0,0,0-.187-.6,2.12,2.12,0,0,0-.551-.5,14.292,14.292,0,0,0-1.48-.773,7.037,7.037,0,0,1-1.571-.945,3.544,3.544,0,0,1-.836-1.055,3,3,0,0,1-.312-1.406A2.951,2.951,0,0,1,12.537,16.5a4.269,4.269,0,0,1,2.84-.867,6.686,6.686,0,0,1,1.7.211,11.771,11.771,0,0,1,1.692.593l-.782,1.883a11.279,11.279,0,0,0-1.511-.523,4.873,4.873,0,0,0-1.176-.149,1.553,1.553,0,0,0-1.055.321,1.056,1.056,0,0,0-.367.836,1.034,1.034,0,0,0,.148.558,1.616,1.616,0,0,0,.473.461,14.611,14.611,0,0,0,1.535.8,6.128,6.128,0,0,1,2.2,1.535A3,3,0,0,1,18.822,24.051Z" fill={secondaryfill}/>
		<path d="M31.42,21.5a6.2,6.2,0,0,1-1.406,4.359,5.215,5.215,0,0,1-4.032,1.524,5.212,5.212,0,0,1-4.031-1.524,6.222,6.222,0,0,1-1.406-4.375,6.137,6.137,0,0,1,1.41-4.355A5.274,5.274,0,0,1,26,15.621a5.2,5.2,0,0,1,4.027,1.516A6.212,6.212,0,0,1,31.42,21.5Zm-8.336,0a4.768,4.768,0,0,0,.727,2.883,2.543,2.543,0,0,0,2.171.969q2.9,0,2.9-3.852T26,17.637a2.561,2.561,0,0,0-2.18.972A4.757,4.757,0,0,0,23.084,21.5Z" fill={secondaryfill}/>
		<path d="M33.947,27.223V15.8h2.422v9.422H41v2Z" fill={secondaryfill}/>
		<path d="M52.623,21.4a5.627,5.627,0,0,1-1.6,4.321,6.55,6.55,0,0,1-4.637,1.5H43.146V15.8h3.586a6.04,6.04,0,0,1,4.344,1.476A5.434,5.434,0,0,1,52.623,21.4Zm-2.516.063q0-3.68-3.25-3.68H45.568v7.438h1.039Q50.107,25.223,50.107,21.465Z" fill={secondaryfill}/>
	</g>
</svg>
	);
};

export default PropertySold;