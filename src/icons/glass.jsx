import React from 'react';

function Glass(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="13.2" x2="50.8" y1="20" y2="20"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="32" x2="32" y1="44" y2="60"/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="18" x2="46" y1="60" y2="60"/>
		<path d="M32,44L32,44 c-10.88,0-19.545-9.108-19.001-19.975L14,4l36,0l1.001,20.025C51.545,34.892,42.88,44,32,44z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Glass;