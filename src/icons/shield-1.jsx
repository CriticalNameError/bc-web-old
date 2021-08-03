import React from 'react';

function Shield1(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<polygon fill="none" points="32 20 34.924 25.926 41.463 26.876 36.731 31.488 37.848 38 32 34.925 26.152 38 27.269 31.488 22.537 26.876 29.076 25.926 32 20" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M32,62S3,51,3,11L32,3l29,8C61,51,32,62,32,62Z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M32,55.368c-5.807-3.12-21.237-13.806-22.861-39.837L32,9.224l22.861,6.307C53.237,41.562,37.807,52.248,32,55.368Z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Shield1;