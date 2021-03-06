import React from 'react';

function Ecology(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M15.377,8.234c1.829,1.352,3.234,4.79,3.234,4.79a6.253,6.253,0,0,1,2.074,2.5,6.881,6.881,0,0,1,.027,3.3s1.4,4.112.742,5.266-3.461,1.894-3.461,1.894a5.4,5.4,0,0,1-3.543,2.554A3.32,3.32,0,0,0,11.319,32c0,2.225,2.224,5.849,2.224,5.849S15.85,38.977,16.18,39.8a12.585,12.585,0,0,1,.441,2.743s2.2,3.873.959,6.1c-.394.71-2.224,1.236-2.224,1.236L12.79,53.727" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M54.887,14.188a47.05,47.05,0,0,1-7.694,2.461s-3.577,3.982-5.925,3.652-4.737-2.965-4.737-2.965.164-4.861-.577-5.108S33.235,13.3,32,12.31s-.523-3.775-.523-3.775-2.69-.838-3.02-1.745.979-2.924,1.229-3.7" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M53,41C39,46,43,61,31,61" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M45.806,29.01l.09-.191a20.768,20.768,0,0,0-5-1.02,15.012,15.012,0,0,0-2.856-1.4c-.989-.247-4.23.824-4.23.824S29.858,32,29.858,33.812c0,.741,1.425,1.889,2.469,2.922" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M62,28.1A21.938,21.938,0,0,1,46,35a10,10,0,0,0,0,20A16,16,0,0,0,62,39Z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M59.086,21.637A29,29,0,1,0,24,59.872" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Ecology;