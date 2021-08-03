import React from 'react';

function FinalScore(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M13,40a10.343,10.343,0,0,1,4-1,3.663,3.663,0,0,1,4,4c0,4-9,9.5-9,9.5V53h9" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M43,52.5a22.682,22.682,0,0,0,5,.5c2,0,4-1,4-3.5,0-2-2-3.5-6-3.5,4,0,6-2,6-4s-2-3-4-3a18.92,18.92,0,0,0-4,.5" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<rect height="28" width="30" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x="2" y="32"/>
		<rect height="28" width="30" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x="32" y="32"/>
		<rect height="28" width="32" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x="16" y="4"/>
		<polyline fill="none" points="29 14 32 11 33 11 33 24" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default FinalScore;