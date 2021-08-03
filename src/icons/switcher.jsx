import React from 'react';

function Switcher(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<rect height="54" width="54" fill="none" rx="6" ry="6" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="5" y="5"/>
		<rect height="28" width="16" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="24" y="18"/>
		<rect height="14" width="16" fill={secondaryfill} x="24" y="18"/>
		<circle cx="12" cy="12" fill={fill} r="2"/>
		<circle cx="52" cy="12" fill={fill} r="2"/>
		<circle cx="12" cy="52" fill={fill} r="2"/>
		<circle cx="52" cy="52" fill={fill} r="2"/>
	</g>
</svg>
	);
};

export default Switcher;