import React from 'react';

function BagDelivery(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M17.3,24,17,18H61L59.19,54.2A4,4,0,0,1,55.2,58H22.805a4,4,0,0,1-4-3.8L18.7,52" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M30,18V11a9,9,0,0,1,9-9h0a9,9,0,0,1,9,9v7" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="2" x2="22" y1="38" y2="38"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="9" x2="27" y1="30" y2="30"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="9" x2="27" y1="46" y2="46"/>
	</g>
</svg>
	);
};

export default BagDelivery;