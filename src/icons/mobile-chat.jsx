import React from 'react';

function MobileChat(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="45" x2="36" y1="18" y2="18"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="54" x2="36" y1="10" y2="10"/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="7" x2="23" y1="14" y2="14"/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="7" x2="45" y1="52" y2="52"/>
		<path d="M28,6a4,4,0,0,1,4-4H58a4,4,0,0,1,4,4V22a4,4,0,0,1-4,4H37l-9,7Z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M45,31V57a5,5,0,0,1-5,5H12a5,5,0,0,1-5-5V11a5,5,0,0,1,5-5H23" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default MobileChat;