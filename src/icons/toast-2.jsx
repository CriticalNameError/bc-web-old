import React from 'react';

function Toast2(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="15.749" x2="12.97" y1="41.453" y2="57.21"/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="5.091" x2="20.848" y1="55.821" y2="58.599"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="9.357" x2="28.392" y1="22.048" y2="25.405"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="48.247" x2="51.024" y1="41.453" y2="57.21"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="43.146" x2="58.903" y1="58.599" y2="55.821"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="35.604" x2="54.638" y1="25.405" y2="22.048"/>
		<path d="M28.894,7.216a132.579,132.579,0,0,1-1.561,26.125,10,10,0,0,1-19.7-3.472A132.6,132.6,0,0,1,15.106,4.784Z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M48.889,4.784a132.6,132.6,0,0,1,7.469,25.085,10,10,0,1,1-19.7,3.472A132.623,132.623,0,0,1,35.1,7.216Z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Toast2;