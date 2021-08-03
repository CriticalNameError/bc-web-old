import React from 'react';

function MStar(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<polyline fill="none" points="31.996 55.999 22 52 2 58 2 10 22 4 42 12 62 6 62 38" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polygon fill="none" points="47 35.273 51.017 43.412 60 44.718 53.5 51.054 55.034 60 47 55.776 38.966 60 40.5 51.054 34 44.718 42.983 43.412 47 35.273" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="22" x2="22" y1="4" y2="52"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="42" x2="42" y1="12" y2="28"/>
	</g>
</svg>
	);
};

export default MStar;