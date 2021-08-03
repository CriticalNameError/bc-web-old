import React from 'react';

function Quote(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M2,24h16v20H2V24 C2,14.58333,5.5,8.6875,12,6" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M30,24h16v20H30V24 c0-9.41667,3.5-15.3125,10-18" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Quote;