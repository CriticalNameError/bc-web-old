import React from 'react';

function Store(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="54" x2="10" y1="13" y2="13"/>
		<rect height="10" width="10" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="17" y="38"/>
		<polyline fill="none" points="8,36 8,61 36,61 36,43 48,43 48,61 56,61 56,36 " stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M54,13V3H10v10L2,23 c0,3.866,3.134,7,7,7c2.234,0,4.218-1.05,5.5-2.679C15.782,28.95,17.766,30,20,30c2.551,0,4.777-1.369,6-3.408 C27.223,28.631,29.449,30,32,30s4.777-1.369,6-3.408C39.223,28.631,41.449,30,44,30c2.234,0,4.218-1.05,5.5-2.679 C50.782,28.95,52.766,30,55,30c3.866,0,7-3.134,7-7L54,13z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Store;