import React from 'react';

function Shop1(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<polyline fill="none" points="10 36 10 60 54 60 54 36" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="26 60 26 44 38 44 38 60" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M61.946,22A9,9,0,0,1,53,30a9.2,9.2,0,0,1-7-3.4A8.95,8.95,0,0,1,39,30a9.145,9.145,0,0,1-7-3.4A9.145,9.145,0,0,1,25,30a8.95,8.95,0,0,1-7-3.4A9.343,9.343,0,0,1,11,30a9,9,0,0,1-8.946-8L14,4H50Z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Shop1;