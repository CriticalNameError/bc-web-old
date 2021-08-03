import React from 'react';

function Compass21(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<polyline fill="none" points="34.17 19.787 38.142 9.858 28.213 13.83" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polyline fill="none" points="28.213 34.17 38.142 38.142 34.17 28.213" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polyline fill="none" points="13.83 28.213 9.858 38.142 19.787 34.17" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polyline fill="none" points="19.787 13.83 9.858 9.858 13.83 19.787" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polygon fill="none" points="30 30 44 24 30 18 24 4 18 18 4 24 18 30 24 44 30 30" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="24" cy="24" fill="none" r="3" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Compass21;