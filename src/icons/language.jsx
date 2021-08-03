import React from 'react';

function Language(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M2,58h4 c2.2,0,4-1.8,4-4v-4l-4.8-2.4c-2.9-1.5-2.9-5.7,0-7.2L10,38v-4l7.2-2.9c1.3-0.5,1.7-2.3,0.7-3.3L10,20V6" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M20,46l8-10V18 c0-3.3,2.7-6,6-6h22c3.3,0,6,2.7,6,6v22c0,3.3-2.7,6-6,6H20z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="38" x2="52" y1="24" y2="24"/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="38" x2="52" y1="34" y2="34"/>
	</g>
</svg>
	);
};

export default Language;