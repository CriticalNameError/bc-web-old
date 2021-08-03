import React from 'react';

function Dish(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M10,32h2c4.535,0,9.653,2.495,12,6h8a8.581,8.581,0,0,1,8,8H22" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M38.722,42H52c7.25,0,8,4,8,4L31.36,57.632a8.589,8.589,0,0,1-7.034-.293L10,50.063" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M11.285,22A25,25,0,0,1,57,36" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M27,11.5V9a5,5,0,0,1,5-5h0a5,5,0,0,1,5,5v2.5" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<rect height="26" width="8" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="2" y="28"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="61" x2="42" y1="36" y2="36"/>
	</g>
</svg>
	);
};

export default Dish;