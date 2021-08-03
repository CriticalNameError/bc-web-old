import React from 'react';

function Wallet90(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<circle cx="48" cy="40" fill={fill} r="2" strokeLinejoin="miter"/>
		<path d="M7,18c-2.761,0-5-2.239-5-5 v0c0-2.761,2.239-5,5-5h4" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M58,34V18H7 c-2.761,0-5-2.239-5-5v41c0,4.418,3.582,8,8,8h48V46" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M62,46H48 c-3.314,0-6-2.686-6-6v0c0-3.314,2.686-6,6-6h14V46z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points=" 11,13 11,2 51,2 51,13 11,13 " stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Wallet90;