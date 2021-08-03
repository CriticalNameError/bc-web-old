import React from 'react';

function SignOpen(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="14" x2="28.641" y1="18" y2="8.173"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="50" x2="35.359" y1="18" y2="8.173"/>
		<rect height="42" width="60" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="2" y="18"/>
		<circle cx="32" cy="6" fill="none" r="4" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M23.618,38.997c0,1.536-0.381,2.717-1.143,3.542s-1.854,1.238-3.275,1.238 s-2.514-0.413-3.275-1.238s-1.143-2.01-1.143-3.555s0.382-2.724,1.146-3.539c0.764-0.815,1.858-1.222,3.284-1.222 c1.427,0,2.518,0.411,3.272,1.231C23.24,36.276,23.618,37.456,23.618,38.997z M16.845,38.997c0,1.037,0.197,1.817,0.59,2.342 c0.395,0.525,0.982,0.787,1.766,0.787c1.569,0,2.354-1.043,2.354-3.129c0-2.09-0.78-3.136-2.343-3.136 c-0.782,0-1.373,0.263-1.771,0.791C17.044,37.178,16.845,37.96,16.845,38.997z" fill={secondaryfill} strokeLinejoin="miter"/>
		<path d="M31.952,37.264c0,0.999-0.312,1.763-0.937,2.292s-1.512,0.793-2.662,0.793h-0.845 v3.301h-1.968v-9.28h2.965c1.125,0,1.981,0.242,2.567,0.727C31.659,35.581,31.952,36.303,31.952,37.264z M27.509,38.737h0.647 c0.605,0,1.058-0.12,1.358-0.358c0.301-0.239,0.45-0.587,0.45-1.044c0-0.461-0.125-0.802-0.377-1.022s-0.646-0.33-1.184-0.33h-0.896 V38.737z" fill={secondaryfill} strokeLinejoin="miter"/>
		<path d="M39.049,43.65h-5.345v-9.28h5.345v1.612h-3.377v2.038h3.142v1.612h-3.142v2.393 h3.377V43.65z" fill={secondaryfill} strokeLinejoin="miter"/>
		<path d="M49.218,43.65h-2.5l-4.037-7.021h-0.058c0.08,1.24,0.12,2.125,0.12,2.653v4.367 h-1.758v-9.28h2.482l4.03,6.951h0.044c-0.062-1.206-0.095-2.059-0.095-2.558v-4.393h1.771V43.65z" fill={secondaryfill} strokeLinejoin="miter"/>
	</g>
</svg>
	);
};

export default SignOpen;