import React from 'react';

function TabletMobile(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M40,46H8c-3.314,0-6-2.686-6-6V8 c0-3.314,2.686-6,6-6l42,0c3.314,0,6,2.686,6,6v18" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M40,39H16c-1.105,0-2-0.895-2-2V11 c0-1.105,0.895-2,2-2l31,0c1.105,0,2,0.895,2,2v15" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M58,62H44 c-2.209,0-4-1.791-4-4V30c0-2.209,1.791-4,4-4h14c2.209,0,4,1.791,4,4v28C62,60.209,60.209,62,58,62z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="8" x2="8" y1="22" y2="26"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="40" x2="62" y1="34" y2="34"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="40" x2="62" y1="50" y2="50"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="50" x2="52" y1="56" y2="56"/>
	</g>
</svg>
	);
};

export default TabletMobile;