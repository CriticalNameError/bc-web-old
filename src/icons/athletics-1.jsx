import React from 'react';

function Athletics1(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<circle cx="49" cy="10" fill="none" r="6" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M35.517,36.126,42.7,26.878l4.668,8.559a3,3,0,0,0,3.362,1.473l7.563-1.89a2.662,2.662,0,0,0,1.938-3.229h0a2.662,2.662,0,0,0-2.916-2l-5.79.731-4.889-8.962A3,3,0,0,0,45.8,20.6l-8-6a3,3,0,0,0-.974-.484l-14-4a3,3,0,0,0-3.265,1.141l-5.213,7.3a2.635,2.635,0,0,0,.612,3.675h0a2.635,2.635,0,0,0,3.5-.4l4.748-5.365,9.071,2.592L23.4,28.976a6,6,0,0,0,1.933,9.442l8.045,3.751-6.7,8.926a3.089,3.089,0,0,0,.153,3.982A3,3,0,0,0,31.4,54.8l9-12a3,3,0,0,0,.509-2.534,3.369,3.369,0,0,0-1.652-1.99l-8.195-4.714" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M22.01,42.251,9.258,56.976a3,3,0,1,1-4.516-3.951l13.128-15" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Athletics1;