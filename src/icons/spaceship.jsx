import React from 'react';

function Spaceship(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="39.73" x2="55.67" y1="8.265" y2="24.204"/>
		<path d="M33.48,11.733A21.347,21.347,0,0,0,6.532,20.555l9.188,9.188" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M52.214,30.4a21.347,21.347,0,0,1-8.77,27.068l-9.226-9.226" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M26.884,52.278,11.722,37.116S24.673,4.9,61,3C58.947,39.169,26.884,52.278,26.884,52.278Z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M6.757,48.757a6,6,0,0,1,8.486,8.486C12.243,60.243,3,61,3,61S3.757,51.757,6.757,48.757Z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="35" cy="29" fill="none" r="6" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Spaceship;