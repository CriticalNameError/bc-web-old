import React from 'react';

function PropertyForSale(props) {
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
		<path d="M21.119,24.043a2.951,2.951,0,0,1-1.113,2.437,4.837,4.837,0,0,1-3.1.891,7.275,7.275,0,0,1-3.234-.687v-2.25a13.29,13.29,0,0,0,1.957.726,5.762,5.762,0,0,0,1.465.211,2.075,2.075,0,0,0,1.222-.3,1.04,1.04,0,0,0,.426-.906,1,1,0,0,0-.187-.6,2.086,2.086,0,0,0-.551-.5,14.176,14.176,0,0,0-1.481-.774,7.012,7.012,0,0,1-1.57-.945,3.516,3.516,0,0,1-.836-1.055,3,3,0,0,1-.312-1.406A2.948,2.948,0,0,1,14.834,16.5a4.269,4.269,0,0,1,2.84-.867,6.686,6.686,0,0,1,1.7.211,11.609,11.609,0,0,1,1.691.594l-.781,1.882a11.38,11.38,0,0,0-1.512-.523,4.863,4.863,0,0,0-1.175-.148,1.553,1.553,0,0,0-1.055.32,1.056,1.056,0,0,0-.367.836,1.031,1.031,0,0,0,.148.558,1.6,1.6,0,0,0,.473.461,14.5,14.5,0,0,0,1.535.8,6.135,6.135,0,0,1,2.2,1.535A3,3,0,0,1,21.119,24.043Z" fill={secondaryfill}/>
		<path d="M30.342,27.215,29.514,24.5H25.35l-.829,2.719H21.912l4.031-11.469H28.9l4.047,11.469Zm-1.406-4.75q-1.149-3.7-1.293-4.18c-.1-.323-.165-.578-.207-.765q-.258,1-1.477,4.945Z" fill={secondaryfill}/>
		<path d="M34.549,27.215V15.793h2.422v9.422H41.6v2Z" fill={secondaryfill}/>
		<path d="M50.326,27.215H43.748V15.793h6.578v1.984H46.17v2.508h3.867V22.27H46.17v2.945h4.156Z" fill={secondaryfill}/>
	</g>
</svg>
	);
};

export default PropertyForSale;