import React from 'react';

function World2(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M9.6,12 c5.5,7.3,12.5,10,22.4,10c9.8,0,16.9-2.7,22.4-10" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M9.6,52 c5.5-7.3,12.5-10,22.4-10c9.8,0,16.9,2.7,22.4,10" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M32,62c10.6-5.1,16-16.6,16-30 S42.6,7.1,32,2" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M32,62c-10.6-5.1-16-16.6-16-30 S21.4,7.1,32,2" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="32,62 32,59.3 32,4.7 32,2 " stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="2" x2="62" y1="32" y2="32"/>
		<circle cx="32" cy="32" fill="none" r="30" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default World2;