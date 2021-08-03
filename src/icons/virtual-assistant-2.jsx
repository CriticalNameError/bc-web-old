import React from 'react';

function VirtualAssistant2(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M9,56V49.9a4,4,0,0,1,1.959-3.444C12.86,45.328,16.309,44,22,44s9.14,1.328,11.041,2.454A4,4,0,0,1,35,49.9V56" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M15,31a7,7,0,0,1,14,0c0,3.866-3.134,8-7,8S15,34.866,15,31Z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M34,7V19a5,5,0,0,0,5,5h1v6l10-6h7a5,5,0,0,0,5-5V7a5,5,0,0,0-5-5H39A5,5,0,0,0,34,7Z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="28 14 2 14 2 56 56 56 56 30" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default VirtualAssistant2;