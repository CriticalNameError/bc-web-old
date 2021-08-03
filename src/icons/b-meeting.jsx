import React from 'react';

function BMeeting(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<polygon fill="none" points=" 62,2 28,2 28,30 38,22 62,22 " stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="50" cy="36" fill="none" r="6" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="14" cy="36" fill="none" r="6" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M26,60v-5.965 c0-1.42-0.745-2.726-1.967-3.449C22.088,49.435,18.716,48,14,48c-4.777,0-8.127,1.426-10.052,2.575C2.736,51.299,2,52.601,2,54.013 V60H26z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M62,60v-5.965 c0-1.42-0.745-2.726-1.967-3.449C58.088,49.435,54.716,48,50,48c-4.777,0-8.127,1.426-10.052,2.575 C38.736,51.299,38,52.601,38,54.013V60H62z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default BMeeting;