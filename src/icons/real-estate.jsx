import React from 'react';

function RealEstate(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M30.156,10a10,10,0,1,0,0,8H38l4,3,4-3h5l2-8Z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M11,34h2c4.6,0,9.6,2.4,12,6h8c4,0,8,4,8,8H23" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M39.8,44H53c7.2,0,8,4,8,4L32.4,59.6a8.551,8.551,0,0,1-7-.2L11,52" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<rect height="26" width="8" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="3" y="30"/>
		<circle cx="19" cy="14" fill="none" r="3" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default RealEstate;