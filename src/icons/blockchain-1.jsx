import React from 'react';

function Blockchain1(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<polyline fill="none" points="48 45.091 51 47 62 40 62 28 51 20.977 40 28 40 31" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="21 40 32 46.999 43 40" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polyline fill="none" points="21 15.88 32 22.879 43 15.88" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polyline fill="none" points="24 28 13 34.999 2 28" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polyline fill="none" points="40 28 51 34.999 62 28" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polyline fill="none" points="43 20 43 15.88 32 8.856 21 15.88 21 20" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="23.999 32 24 28 13 20.977 2 28 2 40 13 47 16 45.091" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="32" x2="32" y1="46.614" y2="58.887"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="32" x2="32" y1="46.999" y2="59"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="32" x2="32" y1="22.879" y2="28"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="13" x2="13" y1="34.999" y2="47"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="51" x2="51" y1="34.999" y2="47"/>
		<polygon fill="none" points="43 40 32 32.976 21 40 21 52 32 59 43 52 43 40" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Blockchain1;