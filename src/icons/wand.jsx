import React from 'react';

function Wand(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<rect height="9.899" width="46.669" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} transform="translate(-21.255 28.686) rotate(-45)" x="0.665" y="35.05"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="29" x2="36" y1="28" y2="35"/>
		<polygon fill="none" points="50 39 51.926 44 50 49 55 47 60 49 58 44 60 39 55 41 50 39" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polygon fill="none" points="50 4 51.926 9 50 14 55 12 60 14 58 9 60 4 55 6 50 4" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polygon fill="none" points="15.074 4 17 9 15.074 14 20.074 12 25.074 14 23.074 9 25.074 4 20.074 6 15.074 4" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Wand;