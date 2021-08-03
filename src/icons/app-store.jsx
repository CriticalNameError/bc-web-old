import React from 'react';

function AppStore(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<rect height="15" width="15" fill="none" rx="2" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="4" y="4"/>
		<rect height="14.573" width="14.573" fill="none" rx="1.943" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} transform="translate(2.559 29.178) rotate(-45)" x="29.213" y="4.213"/>
		<rect height="15" width="15" fill="none" rx="2" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="29" y="29"/>
		<rect height="15" width="15" fill="none" rx="2" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="4" y="29"/>
	</g>
</svg>
	);
};

export default AppStore;