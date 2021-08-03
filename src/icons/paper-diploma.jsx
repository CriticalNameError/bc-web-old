import React from 'react';

function PaperDiploma(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<path d="M51,9V2H7v54 c0,3.314,2.686,6,6,6" fill="none" stroke={fill}/>
		<path d="M19,56c0,3.314-2.686,6-6,6 h40c3.314,0,6-2.686,6-6v-4H19V56z" fill="none" stroke={fill}/>
		<line fill="none" x1="17" x2="34" y1="16" y2="16"/>
		<line fill="none" x1="17" x2="34" y1="27" y2="27"/>
		<line fill="none" x1="17" x2="29" y1="38" y2="38"/>
		<line fill="none" stroke={fill} x1="51" x2="51" y1="52" y2="45"/>
		<polyline fill="none" points="58,28.484 58,43 51,38 44,43 44,28.484 " strokeLinecap="butt"/>
		<circle cx="51" cy="20" fill="none" r="11"/>
	</g>
</svg>
	);
};

export default PaperDiploma;