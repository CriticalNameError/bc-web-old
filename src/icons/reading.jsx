import React from 'react';

function Reading(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<circle cx="32" cy="12" fill="none" r="9" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="46 52.274 46 58 32 61 18 58 18 52.274" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polyline fill="none" points="18 46.51 18 36 32 39 46 36 46 46.51" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="32" x2="32" y1="61" y2="39"/>
		<path d="M51.929,48.348l-10.9-3.291A4.529,4.529,0,0,0,40.5,45a2.493,2.493,0,0,0-.742,4.875l16.558,6.039A2.966,2.966,0,0,0,57,56a3,3,0,0,0,2.708-4.292L49.333,28.928A5,5,0,0,0,44.783,26H19.217a5,5,0,0,0-4.55,2.928L4.292,51.708a2.983,2.983,0,0,0,3.392,4.206l16.558-6.039A2.493,2.493,0,0,0,23.5,45a4.529,4.529,0,0,0-.529.057l-10.9,3.291" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Reading;