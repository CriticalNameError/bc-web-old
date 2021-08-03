import React from 'react';

function Measurement(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="52" x2="52" y1="52" y2="44"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="42" x2="42" y1="52" y2="44"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="32" x2="32" y1="52" y2="44"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="22" x2="22" y1="52" y2="44"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="30" x2="30" y1="28" y2="20"/>
		<path d="M16,28c8.094,0,14-3.75,14-8v8Z" fill={fill}/>
		<path d="M2,44c0,4.418,6.268,8,14,8H62V28H16C8.268,28,2,24.418,2,20Z" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<ellipse cx="16" cy="20" fill="none" rx="14" ry="8" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Measurement;