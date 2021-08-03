import React from 'react';

function WineList(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="14" x2="24" y1="16" y2="16"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="6" x2="32" y1="42" y2="42"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="6" x2="32" y1="54" y2="54"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="36" x2="45" y1="20" y2="20"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="51" x2="53" y1="20" y2="20"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="51" x2="53" y1="32" y2="32"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="51" x2="53" y1="44" y2="44"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="38" x2="45" y1="32" y2="32"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="38" x2="45" y1="44" y2="44"/>
		<polyline fill="none" points="32 8 59 8 59 56 38 56" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M24,24V9h1a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H13a1,1,0,0,0-1,1V8a1,1,0,0,0,1,1h1V24L6,36V59a3,3,0,0,0,3,3H29a3,3,0,0,0,3-3V36Z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default WineList;