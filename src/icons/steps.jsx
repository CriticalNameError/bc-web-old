import React from 'react';

function Steps(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M54.5,36.6l-14-1.1 c0.5-6.2-2.9-13.8-2.4-20.3C38.8,7,43,1.6,49.2,2.1c5.8,0.5,9.5,6.6,8.7,16.7C57.1,28.5,54.5,36.6,54.5,36.6z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M46.1,54 L46.1,54c-3.9-0.3-6.7-3.7-6.4-7.5l0.2-3l14,1.1l-0.2,3C53.3,51.4,49.9,54.3,46.1,54z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M9.6,44.6l14-1.2 c-0.5-6.2,2.9-13.8,2.3-20.3C25.2,14.9,21,9.5,14.8,10c-5.8,0.5-9.5,6.6-8.6,16.8C6.9,36.5,9.6,44.6,9.6,44.6z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M18.1,61.9 L18.1,61.9c3.9-0.3,6.7-3.7,6.4-7.6l-0.2-3l-14,1.2l0.2,3C10.8,59.4,14.2,62.3,18.1,61.9z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Steps;