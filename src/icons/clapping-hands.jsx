import React from 'react';

function ClappingHands(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M47.409,22.323l-7.637-7.629a2.733,2.733,0,0,0-3.919.055h0a2.733,2.733,0,0,0,.054,3.81l8.363,8.363" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M37.061,19.714,32.8,15.481a2.733,2.733,0,0,0-3.92.056h0a2.733,2.733,0,0,0,.055,3.809" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M60.787,42.32a15.2,15.2,0,0,0,.43-10.762c-1.6-4.787-3.877-10.187-4.968-15.091a3.008,3.008,0,1,0-5.892,1.208A60.039,60.039,0,0,1,51,26.718" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M21.766,37.366a2.992,2.992,0,0,0-4.156-.031h0a2.966,2.966,0,0,0-.06,4.255L34.315,58.348a12.474,12.474,0,0,0,17.639,0h0A16.565,16.565,0,0,0,55.978,41.39c-1.738-5.2-4.209-11.058-5.394-16.382a3.265,3.265,0,1,0-6.4,1.312c.03.243.693,5.189,1.409,8.884a.3.3,0,0,1-.51.269L32.7,23.084a2.967,2.967,0,0,0-4.255.06h0A2.968,2.968,0,0,0,28.5,27.28L38.979,37.756" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M21.769,28.977a2.967,2.967,0,0,0-4.135-.058h0a2.967,2.967,0,0,0-.061,4.255L30.567,46.168" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M28.75,27.527l-3.62-3.589A2.967,2.967,0,0,0,20.875,24h0a2.967,2.967,0,0,0,.059,4.135L34.767,41.968" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M9.5,9.394,7.844,11.273A1.251,1.251,0,0,0,8.1,13.148L15.5,18a1.252,1.252,0,0,0,1.639-1.86L11.392,9.41A1.252,1.252,0,0,0,9.5,9.394Z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M4.32,20.321a1.254,1.254,0,0,0-1.684.861l-.6,2.432a1.251,1.251,0,0,0,1.09,1.546l8.809.882a1.252,1.252,0,0,0,.593-2.407Z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M22.052,2.147a1.248,1.248,0,0,0-1.038-.063l-2.337.9a1.252,1.252,0,0,0-.643,1.778l4.318,7.729a1.252,1.252,0,0,0,2.313-.891L22.684,2.971A1.248,1.248,0,0,0,22.052,2.147Z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default ClappingHands;