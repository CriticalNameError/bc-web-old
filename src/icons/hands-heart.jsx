import React from 'react';

function HandsHeart(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<path d="M14,62V58L3.444,45.685A6,6,0,0,1,2,41.78V23.5A3.5,3.5,0,0,1,5.5,20h0A3.5,3.5,0,0,1,9,23.5H9V35.13" fill="none" stroke={fill} strokeLinecap="butt"/>
		<path d="M26,62V48.485a6,6,0,0,0-1.757-4.242L14.5,34.5a3.535,3.535,0,0,0-5,0h0a3.535,3.535,0,0,0,0,5h0L17,47" fill="none" stroke={fill} strokeLinecap="butt"/>
		<path d="M50,62V58L60.556,45.685A6,6,0,0,0,62,41.78V23.5A3.5,3.5,0,0,0,58.5,20h0A3.5,3.5,0,0,0,55,23.5h0V35.13" fill="none" stroke={fill} strokeLinecap="butt"/>
		<path d="M38,62V48.485a6,6,0,0,1,1.757-4.242L49.5,34.5a3.535,3.535,0,0,1,5,0h0a3.535,3.535,0,0,1,0,5h0L47,47" fill="none" stroke={fill} strokeLinecap="butt"/>
		<path d="M46,10.5A7.5,7.5,0,0,0,32,6.769a7.495,7.495,0,1,0-11.485,9.323L32,27.607,43.485,16.092A7.47,7.47,0,0,0,46,10.5Z" fill="none"/>
	</g>
</svg>
	);
};

export default HandsHeart;