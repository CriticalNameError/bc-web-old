import React from 'react';

function JointAccount(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<circle cx="50" cy="8" fill="none" r="6" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="14" cy="8" fill="none" r="6" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="32" cy="48" fill="none" r="14" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M48,36H62V26.034a4,4,0,0,0-1.966-3.45A19.6,19.6,0,0,0,50,20a19.432,19.432,0,0,0-10.052,2.576A4,4,0,0,0,38,26.014V29" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M16,36H2V26.034a4,4,0,0,1,1.966-3.45A19.6,19.6,0,0,1,14,20a19.432,19.432,0,0,1,10.052,2.576A4,4,0,0,1,26,26.014V29" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<rect height="7.071" width="7.071" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} transform="translate(-24.569 36.686) rotate(-45)" x="28.464" y="44.464"/>
	</g>
</svg>
	);
};

export default JointAccount;