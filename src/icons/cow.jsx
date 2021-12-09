import React from 'react';

function Cow(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<circle cx="24" cy="24" fill="none" r="3"/>
		<circle cx="40" cy="24" fill="none" r="3"/>
		<circle cx="22" cy="48" fill="none" r="4" stroke={fill}/>
		<circle cx="42" cy="48" fill="none" r="4" stroke={fill}/>
		<path d="M18,10V4c0-1.10457,0.89543-2,2-2h0 c1.10457,0,2,0.89543,2,2v6" fill="none" stroke={fill} strokeLinecap="butt"/>
		<path d="M42,10V4c0-1.10457,0.89543-2,2-2H44 c1.10457,0,2,0.89543,2,2v6" fill="none" stroke={fill} strokeLinecap="butt"/>
		<path d="M15.17385,20h-3.17386 C6.47715,20,2,15.52285,2,10.00001V10h14" fill="none" stroke={fill} strokeLinecap="butt"/>
		<path d="M48.82615,20h3.17386 C57.52285,20,62,15.52285,62,10.00001V10H48" fill="none" stroke={fill} strokeLinecap="butt"/>
		<path d="M50,34H14 c-2.20914,0-4,1.79086-4,4v10c0,7.73199,6.26801,14,14,14h16c7.73199,0,14-6.26801,14-14V38C54,35.79086,52.20914,34,50,34z" fill="none"/>
		<polyline fill="none" points="50,34 48,10 16,10 14,34 " stroke={fill} strokeLinecap="butt"/>
	</g>
</svg>
	);
};

export default Cow;