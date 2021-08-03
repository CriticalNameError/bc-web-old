import React from 'react';

function DetachedProperty(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<polyline fill="none" points="55 12 32 4 9 12" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="round" strokeWidth={strokewidth} x1="14" x2="14" y1="10.333" y2="29"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="round" strokeWidth={strokewidth} x1="50" x2="50" y1="10.182" y2="29"/>
		<polygon fill="none" points="28 60 28 46 36 46 36 60 60 60 60 34 4 34 4 60 28 60" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<rect height="8" width="6" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="22" y="16"/>
		<rect height="8" width="6" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="36" y="16"/>
		<rect height="9" width="7" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="45" y="42"/>
		<rect height="9" width="7" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="12" y="42"/>
	</g>
</svg>
	);
};

export default DetachedProperty;