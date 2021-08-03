import React from 'react';

function Timeline(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="32" x2="32" y1="2" y2="62"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="38" x2="32" y1="14" y2="14"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="38" x2="32" y1="50" y2="50"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="26" x2="32" y1="32" y2="32"/>
		<rect height="16" width="16" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="44" y="6"/>
		<rect height="16" width="16" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="44" y="42"/>
		<rect height="16" width="16" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} transform="translate(24 64) rotate(-180)" x="4" y="24"/>
	</g>
</svg>
	);
};

export default Timeline;