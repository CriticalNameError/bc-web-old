import React from 'react';

function Meeting(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<circle cx="50" cy="42" fill="none" r="6" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="14" cy="42" fill="none" r="6" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="32" cy="8" fill="none" r="6" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M44,28 v-1.965c0-1.42-0.745-2.726-1.967-3.449C40.088,21.435,36.716,20,32,20c-4.777,0-8.127,1.426-10.052,2.575 C20.736,23.299,20,24.601,20,26.013V28H44z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M26,62v-1.965 c0-1.42-0.745-2.726-1.967-3.449C22.088,55.435,18.716,54,14,54c-4.777,0-8.127,1.426-10.052,2.575C2.736,57.299,2,58.601,2,60.013 V62H26z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M62,62v-1.965 c0-1.42-0.745-2.726-1.967-3.449C58.088,55.435,54.716,54,50,54c-4.777,0-8.127,1.426-10.052,2.575 C38.736,57.299,38,58.601,38,60.013V62H62z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Meeting;