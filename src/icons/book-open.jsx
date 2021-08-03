import React from 'react';

function BookOpen(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="32" x2="32" y1="11" y2="38"/>
		<polyline fill="none" points=" 56,10 62,10 62,58 2,58 2,10 8,10 " stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M32,11 C25.25,5.917,16.333,4,8,4c0,4.833,0,41,0,41c8.333,0,17.25,1.917,24,7c6.75-5.083,15.667-7,24-7c0,0,0-36.167,0-41 C47.667,4,38.75,5.917,32,11z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default BookOpen;