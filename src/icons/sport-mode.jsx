import React from 'react';

function SportMode(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M31.385,21.817l-5.22-3.321l-7.5,5 c-1.377,0.92-3.241,0.547-4.16-0.832c-0.919-1.379-0.546-3.241,0.832-4.16l9-6c0.922-0.616,2.11-0.671,3.086-0.146l13,6.074" fill="none" stroke={secondaryfill} strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M35.31,35.059l7.068,11.112 c0.546,0.71,0.747,1.627,0.546,2.501c-0.201,0.873-0.781,1.61-1.582,2.012l-16,8c-0.431,0.215-0.889,0.317-1.339,0.317 c-1.101,0-2.16-0.608-2.686-1.659c-0.741-1.482-0.141-3.284,1.341-4.025L34,47l-5.546-6.666" fill="none" stroke={secondaryfill} strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M60.786,30.886 c-0.615-1.538-2.361-2.288-3.9-1.671l-8.066,3.227c0,0-3.812-10.333-5.87-12.391c-2.734-2.734-7.166-2.734-9.899,0 c-1.89,1.89-30.068,32.73-30.068,32.73c-1.226,1.114-1.316,3.012-0.202,4.237C3.372,57.669,4.185,58,5.001,58 c0.72,0,1.442-0.258,2.017-0.78c0,0,31.48-25.057,33.016-25.522l5.746,6.32c0.842,0.927,2.172,1.232,3.334,0.768l10-4 C60.652,34.17,61.401,32.424,60.786,30.886z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="52" cy="10" fill="none" r="8" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default SportMode;