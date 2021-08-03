import React from 'react';

function Payment(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<polyline fill="none" points="36.478,42 4,42 4,16 60,16 60,42 54,42 " stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M16,16v-6 c0-2.209,1.791-4,4-4h0c2.209,0,4,1.791,4,4v6" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M24,16V8 c0-2.209,1.791-4,4-4h0c2.209,0,4,1.791,4,4v8" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M32,16V6 c0-2.209,1.791-4,4-4h0c2.209,0,4,1.791,4,4v10" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M40,16V8 c0-2.209,1.791-4,4-4h0c2.209,0,4,1.791,4,4v8" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M16,42v1 c0,10.493,8.507,19,19,19h0c10.493,0,19-8.507,19-19v-1V24c-4.519,0-8,3.481-8,8v6c-6.167,0-12,4.333-12,10" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="32" cy="29" fill="none" r="5" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="20" x2="12" y1="24" y2="24"/>
	</g>
</svg>
	);
};

export default Payment;