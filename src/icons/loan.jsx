import React from 'react';

function Loan(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M49,41l6.331-3.8a4.415,4.415,0,0,1,5.983,1.4h0A4.413,4.413,0,0,1,60.3,44.475L49,53.229a6,6,0,0,1-2.218,1.076L26.527,59.368a6,6,0,0,1-4.714-.783L7,49H2V33l9.958-1.66a6,6,0,0,1,3.859.651L25,37l14.911.785A4.315,4.315,0,0,1,44,42.094h0a4.316,4.316,0,0,1-3.886,4.3L24,48" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="39" cy="16" fill="none" r="12" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<rect height="7.071" width="7.071" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} transform="translate(0.109 32.263) rotate(-45)" x="35.464" y="12.464"/>
	</g>
</svg>
	);
};

export default Loan;