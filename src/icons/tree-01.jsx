import React from 'react';

function Tree01(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M14,34C14,20,32,4,32,4 s18,16.16667,18,30c0,9.94112-8.05888,18-18,18S14,43.94112,14,34z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="32" x2="32" y1="22" y2="62"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="20" x2="44" y1="62" y2="62"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="32" x2="42" y1="45" y2="35"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="22" x2="32" y1="29" y2="39"/>
	</g>
</svg>
	);
};

export default Tree01;