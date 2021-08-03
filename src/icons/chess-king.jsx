import React from 'react';

function ChessKing(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<circle cx="8" cy="15" fill="none" r="4" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="56" cy="15" fill="none" r="4" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="32" cy="6" fill="none" r="4" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="31 9.858 25 33 10.74 17.901" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polyline fill="none" points="53.26 17.901 39 33 33 9.858" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="45" x2="54.865" y1="52" y2="18.817"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="9.04" x2="18" y1="18.846" y2="52"/>
		<rect height="8" width="44" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x="10" y="52"/>
	</g>
</svg>
	);
};

export default ChessKing;