import React from 'react';

function Sleep2(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M51.1,18 c-1,0-1.9,0.2-2.7,0.4c0-0.1,0-0.3,0-0.4C48.4,9.2,41,2,32,2c-6.1,0-11.5,3.3-14.3,8.2C17,10.1,16.3,10,15.6,10C8.1,10,2,16,2,23.3 c0,6.6,4.9,12,11.3,13.1C15.1,44.2,22.2,50,30.6,50c7.6,0,14.1-4.7,16.6-11.4c1.2,0.4,2.5,0.7,3.8,0.7c6,0,10.9-4.8,10.9-10.7 C62,22.8,57.1,18,51.1,18z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="8" cy="56" fill="none" r="6" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points=" 26,20 34,20 26,34 38,34 " stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Sleep2;