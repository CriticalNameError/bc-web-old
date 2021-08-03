import React from 'react';

function ThreeDimensionalWorld1(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M47.467,24.791q-1.845-.389-3.867-.684" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M33.933,23.324C33.294,23.31,32.65,23.3,32,23.3s-1.294.01-1.933.024" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M20.4,24.107q-2.019.294-3.867.684" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M56.167,27.624A15.3,15.3,0,0,1,58.58,29.1C60.133,30.284,61,31.591,61,32.967c0,5.338-12.984,9.666-29,9.666S3,38.305,3,32.967c0-1.376.867-2.683,2.42-3.867a15.3,15.3,0,0,1,2.413-1.476" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M23.825,16.533q-.39,1.845-.685,3.867" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M22.357,30.067c-.014.639-.024,1.283-.024,1.933s.01,1.294.024,1.933" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M23.14,43.6q.294,2.019.685,3.867" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M26.657,7.833A15.373,15.373,0,0,1,28.133,5.42C29.318,3.867,30.625,3,32,3c5.339,0,9.667,12.984,9.667,29S37.339,61,32,61c-1.375,0-2.682-.867-3.867-2.42a15.373,15.373,0,0,1-1.476-2.413" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="32" cy="32" fill="none" r="29" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default ThreeDimensionalWorld1;