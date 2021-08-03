import React from 'react';

function Hurricane44(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M42.2,55.3 C39.5,57,35.9,58,32,58c-4.3,0-8.1-1.2-10.9-3.2" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M48.6,41.8 c-3.3,3.2-9.5,5.4-16.6,5.4c-6.9,0-13-2.1-16.4-5.1" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M52.8,31 c-4.1,3.2-11.9,5.4-20.8,5.4c-8.9,0-16.6-2.2-20.8-5.4" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<ellipse cx="32" cy="14.8" fill="none" rx="30" ry="10.8" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Hurricane44;