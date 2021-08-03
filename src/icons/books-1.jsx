import React from 'react';

function Books1(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="10" x2="10" y1="16" y2="28"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="2" x2="18" y1="44" y2="44"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="26" x2="26" y1="16" y2="28"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="18" x2="34" y1="44" y2="44"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="43.997" x2="46.345" y1="15.304" y2="27.073"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="41.63" x2="57.321" y1="44.329" y2="41.198"/>
		<polygon fill="none" points="2,5 2,48.75 2,61 18,61 18,48.75 18,5 " stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polygon fill="none" points="18,5 18,48.75 18,61 34,61 34,48.75 34,5 " stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polygon fill="none" points="34,6.082 42.559,48.987 44.956,61 60.647,57.87 58.25,45.856 49.691,2.952 " stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Books1;