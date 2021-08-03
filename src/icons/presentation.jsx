import React from 'react';

function Presentation(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<circle cx="14" cy="8" fill="none" r="6" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="26 8 59 8 59 46 28 46" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="45" x2="55" y1="46" y2="62"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="35" x2="35" y1="8" y2="3"/>
		<path d="M40.44,19H11a6,6,0,0,0-6,6V58.831A3.115,3.115,0,0,0,7.84,62,3,3,0,0,0,11,59V42h5V58.831A3.115,3.115,0,0,0,18.84,62,3,3,0,0,0,22,59V25l18.412-.877a2.666,2.666,0,0,0,2.579-2.342A2.56,2.56,0,0,0,40.44,19Z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Presentation;