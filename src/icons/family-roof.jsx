import React from 'react';

function FamilyRoof(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<polyline fill="none" points="2,22 32,6 62,22 " stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="50" cy="36" fill="none" r="6" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="14" cy="36" fill="none" r="6" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M26,56v-1.965 c0-1.42-0.745-2.726-1.967-3.449C22.088,49.435,18.716,48,14,48c-4.777,0-8.127,1.426-10.052,2.575C2.736,51.299,2,52.601,2,54.013 V56H26z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M62,56v-1.965 c0-1.42-0.745-2.726-1.967-3.449C58.088,49.435,54.716,48,50,48c-4.777,0-8.127,1.426-10.052,2.575 C38.736,51.299,38,52.601,38,54.013V56H62z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default FamilyRoof;