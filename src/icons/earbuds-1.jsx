import React from 'react';

function Earbuds1(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M4,28V60h8V28a22.192,22.192,0,0,1,.588-5.016A7.994,7.994,0,0,0,28,20V12a8,8,0,0,0-8-8C11.163,4,4,14.745,4,28" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M60,28V60H52V28a22.192,22.192,0,0,0-.588-5.016A7.994,7.994,0,0,1,36,20V12a8,8,0,0,1,8-8c8.837,0,16,10.745,16,24" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="20" x2="20" y1="13" y2="19"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="44" x2="44" y1="13" y2="19"/>
	</g>
</svg>
	);
};

export default Earbuds1;