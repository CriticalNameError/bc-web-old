import React from 'react';

function Savings(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M37.441,32a15.937,15.937,0,0,0,21.118,0A15.983,15.983,0,0,0,32,44v2" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M32,46V44A15.983,15.983,0,0,0,5.441,32a15.937,15.937,0,0,0,21.118,0" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<circle cx="32" cy="14" fill="none" r="12" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polygon fill="none" points="20 46 44 46 42 62 22 62 20 46" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<rect height="7.071" width="7.071" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} transform="translate(-0.527 26.728) rotate(-45)" x="28.464" y="10.464"/>
	</g>
</svg>
	);
};

export default Savings;