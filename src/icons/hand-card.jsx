import React from 'react';

function HandCard(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="2" x2="25.07" y1="19" y2="19"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="2" x2="38.851" y1="27" y2="27"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="10" x2="20" y1="34" y2="34"/>
		<polyline fill="none" points="42,31.494 42,41 2,41 2,9 42,9 42,15 " stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M50,35c-6,0-12-6-12-12h-6 c-4.418,0-8-3.582-8-8v0h18c11.046,0,20,8.954,20,20v0c0,11.046-8.954,20-20,20H20c-3.314,0-6-2.686-6-6v-2h18" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M14,47L14,47c-3.314,0-6-2.686-6-6v0" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default HandCard;