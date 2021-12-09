import React from 'react';

function LemonSlice(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<line fill="none" strokeLinecap="butt" x1="27.196" x2="44.678" y1="27.196" y2="44.678"/>
		<line fill="none" strokeLinecap="butt" x1="27.392" x2="52" y1="27" y2="27"/>
		<line fill="none" strokeLinecap="butt" x1="27" x2="27" y1="52" y2="27.392"/>
		<path d="M4,50.392 c12.811,12.811,33.581,12.811,46.392,0s12.811-33.581,0-46.392L4,50.392z" fill="none" stroke={fill}/>
		<path d="M9.523,44.869 C14.031,49.278,20.196,52,27,52c13.807,0,25-11.193,25-25c0-6.804-2.722-12.969-7.131-17.477" fill="none" stroke={fill} strokeLinecap="butt"/>
	</g>
</svg>
	);
};

export default LemonSlice;