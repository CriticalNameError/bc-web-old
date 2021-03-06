import React from 'react';

function Visa(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<polygon fill={secondaryfill} points="26.219,37.828 29.386,37.828 31.369,26.202 28.2,26.202 " strokeLinejoin="miter"/>
		<path d="M37.758,30.87c-1.108-0.538-1.786-0.897-1.779-1.441c0-0.483,0.574-1,1.815-1 c1.015-0.016,1.833,0.191,2.656,0.58l0.43-2.52C40.251,26.253,39.267,26,38.039,26c-3.131,0-5.337,1.577-5.355,3.837 c-0.018,1.67,1.575,2.602,2.777,3.158c1.233,0.57,1.648,0.933,1.642,1.442c-0.008,0.779-0.985,1.135-1.896,1.135 c-1.406,0-2.115-0.217-3.391-0.795l-0.445,2.603c0.74,0.324,2.109,0.606,3.53,0.62c3.331,0,5.493-1.559,5.518-3.972 C40.43,32.706,39.586,31.699,37.758,30.87z" fill={secondaryfill} strokeLinejoin="miter"/>
		<path d="M49.005,26.213h-2.449c-0.759,0-1.326,0.207-1.659,0.964l-4.706,10.654h3.327 c0,0,0.544-1.433,0.667-1.747c0.364,0,3.596,0.005,4.058,0.005c0.095,0.407,0.386,1.742,0.386,1.742h2.94L49.005,26.213z M45.097,33.706c0.131-0.335,1.425-3.656,1.683-4.359c0.428,2.004,0.011,0.06,0.948,4.359H45.097z" fill={secondaryfill} strokeLinejoin="miter"/>
		<path d="M23.561,26.211l-3.102,7.928l-0.331-1.611l-1.111-5.342 c-0.192-0.736-0.748-0.956-1.436-0.981h-5.11l-0.04,0.242c1.243,0.301,2.354,0.735,3.328,1.275l2.817,10.097l3.353-0.004 l4.989-11.603H23.561z" fill={secondaryfill} strokeLinejoin="miter"/>
		<path d="M2,50V14c0-2.2,1.8-4,4-4 h52c2.2,0,4,1.8,4,4v36c0,2.2-1.8,4-4,4H6C3.8,54,2,52.2,2,50z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Visa;