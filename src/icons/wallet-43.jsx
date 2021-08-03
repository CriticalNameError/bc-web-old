import React from 'react';

function Wallet43(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<circle cx="48" cy="37" fill={fill} r="2" strokeLinejoin="miter"/>
		<path d="M7,15c-2.761,0-5-2.239-5-5 v0c0-2.761,2.239-5,5-5h40v4" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M58,31V15H7 c-2.761,0-5-2.239-5-5v41c0,4.418,3.582,8,8,8h48V43" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M62,43H48 c-3.314,0-6-2.686-6-6v0c0-3.314,2.686-6,6-6h14V43z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Wallet43;