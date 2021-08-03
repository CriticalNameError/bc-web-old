import React from 'react';

function ThumbUp(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M13,33,24,2s7-.182,7,8V25H55a5.618,5.618,0,0,1,5.727,5.364,5.4,5.4,0,0,1-1.312,3.511,5.418,5.418,0,0,1-.986,9.8,5.432,5.432,0,0,1-3.06,8.285A4.084,4.084,0,0,1,52.545,59H31a39.551,39.551,0,0,1-18-4" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<rect height="30" width="11" fill="none" rx="3" ry="3" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="2" y="28"/>
	</g>
</svg>
	);
};

export default ThumbUp;