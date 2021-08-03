import React from 'react';

function GiftExchange(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="34" x2="34" y1="40.3206787" y2="18"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="42" x2="42" y1="18" y2="44"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="20" x2="20" y1="36.2939186" y2="18"/>
		<path d="M26,6 c0-2.2,1.7999992-4,4-4c6,0,8,8,8,8s-5.7999992,0-8,0S26,8.1999998,26,6z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M50,6 c0-2.2-1.7999992-4-4-4c-6,0-8,8-8,8s5.7999992,0,8,0S50,8.1999998,50,6z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M38.6978531,44H52 c7.2000008,0,8,4,8,4L31.3999996,59.5999985c-2.2000008,1-4.8000011,0.7999992-7-0.2000008L2,48V34h10 c4.6000004,0,9.6000004,2.4000015,12,6h8c4,0,8,4,8,8H22" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="56,18 56,44 50,44 " stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<rect height="8" width="48" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="14" y="10"/>
	</g>
</svg>
	);
};

export default GiftExchange;