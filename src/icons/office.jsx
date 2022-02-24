import React from 'react';

function Office(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<polyline fill="none" points=" 47,28 47,8 17,8 17,34 "/>
		<line fill="none" stroke={fill} x1="28" x2="36" y1="62" y2="62"/>
		<line fill="none" x1="32" x2="32" y1="2" y2="8"/>
		<line fill="none" x1="25" x2="39" y1="15" y2="15"/>
		<line fill="none" x1="25" x2="39" y1="21" y2="21"/>
		<line fill="none" x1="25" x2="39" y1="27" y2="27"/>
		<line fill="none" stroke={fill} x1="14" x2="20" y1="48" y2="48"/>
		<line fill="none" stroke={fill} x1="44" x2="50" y1="42" y2="42"/>
		<line fill="none" stroke={fill} x1="44" x2="50" y1="48" y2="48"/>
		<line fill="none" stroke={fill} x1="44" x2="50" y1="54" y2="54"/>
		<line fill="none" stroke={fill} x1="14" x2="20" y1="54" y2="54"/>
		<rect height="22" width="22" fill="none" stroke={fill} x="6" y="40"/>
		<rect height="28" width="22" fill="none" stroke={fill} x="36" y="34"/>
	</g>
</svg>
	);
};

export default Office;