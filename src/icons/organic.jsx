import React from 'react';

function Organic(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M18,32C18,18,32,3,32,3S46,18,46,32c0,10-6.268,18-14,18S18,42,18,32Z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M49,17.155a54.9,54.9,0,0,1,7.2-3.876s6.857,16.265,2.153,27.826C55.379,48.411,48.88,52.776,43,51.885" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M15,17.155a54.9,54.9,0,0,0-7.2-3.876S.945,29.544,5.649,41.105C8.621,48.411,15.12,52.776,21,51.885" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="32" x2="32" y1="62" y2="23"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="32" x2="39" y1="41" y2="35"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="32" x2="25" y1="35" y2="29"/>
	</g>
</svg>
	);
};

export default Organic;