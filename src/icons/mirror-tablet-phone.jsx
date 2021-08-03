import React from 'react';

function MirrorTabletPhone(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M28,54H10a5,5,0,0,1-5-5V8a5,5,0,0,1,5-5H42a5,5,0,0,1,5,5V22" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<rect height="33" width="25" fill="none" rx="4" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="34" y="28"/>
	</g>
</svg>
	);
};

export default MirrorTabletPhone;