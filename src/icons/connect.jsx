import React from 'react';

function Connect(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="26.7" x2="17.3" y1="24.481" y2="39.519"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="37.3" x2="46.7" y1="24.481" y2="39.519"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="22" x2="42" y1="48" y2="48"/>
		<circle cx="12" cy="48" fill="none" r="10" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="52" cy="48" fill="none" r="10" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="32" cy="16" fill="none" r="10" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Connect;