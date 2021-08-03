import React from 'react';

function World3(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M15.377,8.234c1.829,1.352,3.234,4.79,3.234,4.79a6.253,6.253,0,0,1,2.074,2.5,6.881,6.881,0,0,1,.027,3.3s1.4,4.112.742,5.266-3.461,1.894-3.461,1.894a5.4,5.4,0,0,1-3.543,2.554A3.32,3.32,0,0,0,11.319,32c0,2.225,2.224,5.849,2.224,5.849S15.85,38.977,16.18,39.8a12.585,12.585,0,0,1,.441,2.743s2.2,3.873.959,6.1c-.394.71-2.224,1.236-2.224,1.236L12.79,53.727" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M54.887,14.188a47.05,47.05,0,0,1-7.694,2.461s-3.577,3.982-5.925,3.652-4.737-2.965-4.737-2.965.164-4.861-.577-5.108S33.235,13.3,32,12.31s-.523-3.775-.523-3.775-2.69-.838-3.02-1.745.979-2.924,1.229-3.7" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M53.256,33.9c.659,1.565-1.237,5.563-2.8,6.343A10.6,10.6,0,0,0,46.4,43.475c-.578.907-1.335,4.646-3.231,5.388s-6.387,4.969-8.775,4.31-2.39-6.343-.742-8.9c.984-1.525-.164-4.861-.247-6.015s-3.543-3.3-3.543-4.449c0-1.812,3.954-6.59,3.954-6.59s3.241-1.071,4.23-.824A15.012,15.012,0,0,1,40.9,27.8s3.707.329,5.108,1.071l1.9,1.73S52.6,32.33,53.256,33.9Z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="32" cy="32" fill="none" r="29" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default World3;