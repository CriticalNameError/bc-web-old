import React from 'react';

function SavePlanet(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M14,62V58L3.444,45.685A6,6,0,0,1,2,41.78V23.5A3.5,3.5,0,0,1,5.5,20h0A3.5,3.5,0,0,1,9,23.5V35.13" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M26,62V48.485a6,6,0,0,0-1.757-4.242L14.5,34.5a3.535,3.535,0,0,0-5,0h0a3.535,3.535,0,0,0,0,5L17,47" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M50,62V58L60.556,45.685A6,6,0,0,0,62,41.78V23.5A3.5,3.5,0,0,0,58.5,20h0A3.5,3.5,0,0,0,55,23.5V35.13" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M38,62V48.485a6,6,0,0,1,1.757-4.242L49.5,34.5a3.535,3.535,0,0,1,5,0h0a3.535,3.535,0,0,1,0,5L47,47" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="17" x2="47" y1="17" y2="17"/>
		<circle cx="32" cy="17" fill="none" r="15" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<ellipse cx="32" cy="17" fill="none" rx="6.429" ry="15" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default SavePlanet;