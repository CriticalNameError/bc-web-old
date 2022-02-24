import React from 'react';

function WorldMarker(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<path d="M17.097,57.308 c1.64-1.212,2.899-4.295,2.899-4.295s1.417-0.984,1.86-2.24c0.443-1.256,0.025-2.962,0.025-2.962s1.256-3.686,0.665-4.72 c-0.591-1.034-3.102-1.699-3.102-1.699s-1.034-1.92-3.176-2.29C14.864,38.955,13.46,37.994,13.46,36s1.994-5.244,1.994-5.244 s2.068-1.012,2.364-1.75s0.396-2.46,0.396-2.46s1.967-3.472,0.859-5.466c-0.353-0.636-1.994-1.108-1.994-1.108l-2.301-3.451" fill="none" stroke={fill} strokeLinecap="butt"/>
		<path d="M52.519,51.97 c-2.509-1.203-6.898-2.207-6.898-2.207s-3.207-3.57-5.312-3.274s-4.247,2.659-4.247,2.659s0.148,4.358-0.517,4.58 c-0.665,0.222-2.438-0.96-3.545-0.074c-1.108,0.886-0.469,3.385-0.469,3.385s-2.412,0.752-2.707,1.564s0.878,2.622,1.101,3.316" fill="none" stroke={fill} strokeLinecap="butt"/>
		<path d="M32.2,10c-0.067-0.001-0.133,0-0.2,0 C17.641,10,6,21.641,6,36s11.641,26,26,26s26-11.641,26-26c0-4.735-1.266-9.175-3.477-12.998" fill="none" stroke={fill} strokeLinecap="butt"/>
		<circle cx="42" cy="12" fill="none" r="10"/>
		<line fill="none" x1="42" x2="42" y1="22" y2="34"/>
	</g>
</svg>
	);
};

export default WorldMarker;