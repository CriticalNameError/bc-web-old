import React from 'react';

function PrivacyPolicy(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<circle cx="11" cy="14" fill="none" r="7" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<circle cx="53" cy="14" fill="none" r="7" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M28,40C18,35,18,26,10,26a8.18,8.18,0,0,0-8,8V57H18V41" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M36,40c10-5,10-14,18-14a8.18,8.18,0,0,1,8,8V57H46V41" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default PrivacyPolicy;