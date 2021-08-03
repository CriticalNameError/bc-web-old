import React from 'react';

function FingerSnap(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="52" x2="44" y1="7" y2="15"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="39" x2="38" y1="7" y2="14"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="52" x2="45" y1="20" y2="21"/>
		<path d="M33,36h3.5A4.5,4.5,0,0,1,41,40.5h0A4.5,4.5,0,0,1,36.5,45H33" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M34.5,45A4.5,4.5,0,0,1,39,49.5h0A4.5,4.5,0,0,1,34.5,54H32" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M32,54s4,.125,4,4a3.708,3.708,0,0,1-4,4C16.25,62,2,56,2,56V21L27.326,8.337A2.692,2.692,0,0,1,31.05,9.8h0a7,7,0,0,1-2.672,8.282L23.244,21.5A3,3,0,0,0,24.908,27H57.5A4.5,4.5,0,0,1,62,31.5h0A4.5,4.5,0,0,1,57.5,36H34" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default FingerSnap;