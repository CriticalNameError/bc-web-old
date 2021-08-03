import React from 'react';

function Circle09(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M51.06,55.166 c-0.37-6.513-4.084-8.58-9.515-10.39c-3.884-1.295-5.134-5.218-5.536-7.612" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M27.985,37.161 c-0.402,2.395-1.647,6.32-5.531,7.615c-5.431,1.81-9.179,3.85-9.549,10.365" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M32,38 L32,38c-5.523,0-10-4.477-10-10v-4c0-5.523,4.477-10,10-10h0c5.523,0,10,4.477,10,10v4C42,33.523,37.523,38,32,38z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="32" cy="32" fill="none" r="30" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Circle09;