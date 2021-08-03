import React from 'react';

function Spa1(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M14,35.8C14,24.6,32,6,32,6S50,24.6,50,35.8A17.817,17.817,0,0,1,32,54,17.817,17.817,0,0,1,14,35.8Z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M22,57.63A16.251,16.251,0,0,1,3.924,49.252C-1.054,40.216,5.2,17.208,5.2,17.208s3.369,1.036,7.8,2.824" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M42,57.63a16.251,16.251,0,0,0,18.076-8.378C65.054,40.216,58.8,17.208,58.8,17.208s-3.369,1.036-7.8,2.824" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Spa1;