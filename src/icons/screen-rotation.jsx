import React from 'react';

function ScreenRotation(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="8.121" x2="29.88" y1="29.879" y2="8.12"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="31.121" x2="52.88" y1="52.879" y2="31.12"/>
		<path d="M58.906,42.427,42.427,58.907a3.735,3.735,0,0,1-5.28,0L5.093,26.851a3.734,3.734,0,0,1,0-5.279L21.573,5.093a3.734,3.734,0,0,1,5.279,0L58.907,37.149A3.73,3.73,0,0,1,58.906,42.427Z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M21,59A16,16,0,0,1,5,43" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M59,21A16,16,0,0,0,43,5" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default ScreenRotation;