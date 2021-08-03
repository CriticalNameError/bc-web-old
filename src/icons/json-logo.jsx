import React from 'react';

function JsonLogo(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M37.409,3.506C45.92,7.35,50.85,16.243,50.85,27.263s-6.283,19.72-14.4,19.72S23.493,38.573,23.493,31.42c0-7.028,5.226-12,8.342-13.55" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M26.591,60.494C18.08,56.65,13.15,47.757,13.15,36.737s6.283-19.72,14.4-19.72,12.954,8.41,12.954,15.563c0,7.028-5.226,12-8.342,13.55" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<circle cx="32" cy="32" fill="none" r="29" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default JsonLogo;