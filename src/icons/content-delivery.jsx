import React from 'react';

function ContentDelivery(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="18.947" x2="11.293" y1="14" y2="26.987"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="45.082" x2="27.699" y1="15.263" y2="7.523"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="47.658" x2="30.319" y1="28.242" y2="45.842"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="55.194" x2="53.138" y1="25.941" y2="48.425"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="13.835" x2="50.166" y1="30.609" y2="21.391"/>
		<circle cx="8" cy="32" fill="none" r="6" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<circle cx="56" cy="20" fill="none" r="6" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<circle cx="24" cy="6" fill="none" r="4" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<circle cx="26" cy="50" fill="none" r="6" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<circle cx="52" cy="58" fill="none" r="4" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default ContentDelivery;