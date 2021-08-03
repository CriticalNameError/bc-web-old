import React from 'react';

function MobileTouch(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="6" x2="28" y1="47" y2="47"/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="6" x2="46" y1="12" y2="12"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="33.284" x2="35.284" y1="33.284" y2="31.284"/>
		<path d="M42,62H10c-2.2,0-4-1.8-4-4V6 c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v28.101" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M51,59 L27.05,34.95c-2.734-2.734-2.734-7.166,0-9.899l0,0c2.734-2.734,7.166-2.734,9.899,0L61,49" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="28.096,36 14,36 14,24 28.391,24 " stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default MobileTouch;