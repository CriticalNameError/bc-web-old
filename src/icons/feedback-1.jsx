import React from 'react';

function Feedback1(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M54.233,43.4A21.217,21.217,0,0,0,61,28.156C61,15.034,48.047,5,32,5S3,15.034,3,28.156,15.953,51.794,32,51.794a37.4,37.4,0,0,0,8.12-.965L55,57Z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="32" cy="39" fill={secondaryfill} r="2"/>
		<circle cx="32" cy="39" fill="none" r="2" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="32" x2="32" y1="15" y2="31"/>
	</g>
</svg>
	);
};

export default Feedback1;