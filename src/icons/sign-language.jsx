import React from 'react';

function SignLanguage(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M20,22.476,15.278,9.5a3.333,3.333,0,1,1,6.264-2.281l4.692,12.891" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M26.234,20.112,22,8.474a3.333,3.333,0,0,1,6.265-2.28l5.95,16.348" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M20,22.476l-2.833-7.784a3.463,3.463,0,0,0-4.009-2.272,3.334,3.334,0,0,0-2.321,4.373L17.756,35.8a.334.334,0,0,1-.5.393l-7.5-4.944L7.689,29.883a3.327,3.327,0,0,0-3.8,5.441L21.218,50.967c.063.054.133.1.2.146" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M38.405,14.613l-1.532-4.256a3.465,3.465,0,0,0-4.009-2.272,3.335,3.335,0,0,0-2.321,4.374l3.67,10.083" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M37.756,30.106l9.036-17.092a3.333,3.333,0,1,1,5.894,3.116L43.65,33.222" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M43.65,33.222l8.412-15.913a3.333,3.333,0,0,1,5.894,3.115L49.543,36.337" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M37.756,30.106,44.21,17.9a3.463,3.463,0,0,0-1-4.5,3.334,3.334,0,0,0-4.8,1.213L28.951,32.5a.333.333,0,0,1-.624-.105l-1.364-8.877-.377-2.454A3.326,3.326,0,0,0,20,21.9l0,23.343A15.345,15.345,0,0,0,48.894,51.83L60.645,29.6a3.465,3.465,0,0,0-1-4.5,3.334,3.334,0,0,0-4.8,1.213l-5.3,10.019" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default SignLanguage;