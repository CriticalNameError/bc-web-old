import React from 'react';

function DeliveryFast(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<polyline fill="none" points="52,46 62,46 62,30 54,26 48,10 30,10 30,46 36,46 " stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="38,18 38,26 46,26 " stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="44" cy="46" fill="none" r="8" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="22" x2="2" y1="10" y2="10"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="22" x2="8" y1="20" y2="20"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="22" x2="14" y1="30" y2="30"/>
	</g>
</svg>
	);
};

export default DeliveryFast;