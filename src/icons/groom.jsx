import React from 'react';

function Groom(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M19,40.714,9.8,43.342A8,8,0,0,0,4,51.034V62H23.685C19,52,19,40.714,19,40.714Z" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M45,40.714l9.2,2.628A8,8,0,0,1,60,51.034V62H40.315C45,52,45,40.714,45,40.714Z" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M18,16a14,14,0,0,1,28,0c0,11-7,18-14,18S18,27,18,16Z" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="32" x2="32" y1="48" y2="62"/>
		<polygon fill="none" points="25 38 32 41 25 44 25 38" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polygon fill="none" points="39 38 32 41 39 44 39 38" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Groom;