import React from 'react';

function Watch2(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<polyline fill="none" points="48 16.9 46 2 18 2 16 16.9" stroke={fill} strokeLinecap="butt"/>
		<polyline fill="none" points="48 47.1 46 62 18 62 16 47.1" stroke={fill} strokeLinecap="butt"/>
		<polyline fill="none" points="32 18 32 32 46 32"/>
		<circle cx="32" cy="32" fill="none" r="22" stroke={fill}/>
	</g>
</svg>
	);
};

export default Watch2;