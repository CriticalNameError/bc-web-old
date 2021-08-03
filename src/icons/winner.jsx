import React from 'react';

function Winner(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="32" x2="32" y1="35" y2="25"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="25" x2="39" y1="35" y2="35"/>
		<path d="M22,4H15V9c0,6,3.2,9,7.2,9" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M42,4h7V9c0,6-3.2,9-7.2,9" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M22,2H42V15A10,10,0,0,1,32,25h0A10,10,0,0,1,22,15Z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M14,62V58L3.444,45.685A6,6,0,0,1,2,41.78V23.5A3.5,3.5,0,0,1,5.5,20h0A3.5,3.5,0,0,1,9,23.5V35.13" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M26,62V48.485a6,6,0,0,0-1.757-4.242L14.5,34.5a3.535,3.535,0,0,0-5,0h0a3.535,3.535,0,0,0,0,5L17,47" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M50,62V58L60.556,45.685A6,6,0,0,0,62,41.78V23.5A3.5,3.5,0,0,0,58.5,20h0A3.5,3.5,0,0,0,55,23.5V35.13" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M38,62V48.485a6,6,0,0,1,1.757-4.242L49.5,34.5a3.535,3.535,0,0,1,5,0h0a3.535,3.535,0,0,1,0,5L47,47" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Winner;