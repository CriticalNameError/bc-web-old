import React from 'react';

function Notification(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M27.065,37.8l6.507,16.118a5.156,5.156,0,0,1-2.855,6.7h0a5.158,5.158,0,0,1-6.7-2.855L14.252,33.729" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M48.292,3.466,8.806,16.538c-3.595,1.166-5.8,3.6-5.8,7.551A7.852,7.852,0,0,0,8.806,32L48.55,44.638" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M47,17a7,7,0,0,1,0,14" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<ellipse cx="50.5" cy="24" fill="none" rx="10.5" ry="21" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Notification;