import React from 'react';

function Messaging(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<circle cx="49" cy="17.013" fill="none" r="3" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M58,17.013a9.034,9.034,0,0,0-.1-1.293l3.361-3.475-2-3.464L54.572,9.954a8.958,8.958,0,0,0-2.246-1.3L51,4.013H47L45.674,8.656a8.958,8.958,0,0,0-2.246,1.3L38.742,8.781l-2,3.464L40.1,15.72a8.174,8.174,0,0,0,0,2.587l-3.361,3.474,2,3.464,4.686-1.173a8.961,8.961,0,0,0,2.246,1.3L47,30.013h4l1.326-4.642a8.961,8.961,0,0,0,2.246-1.3l4.686,1.173,2-3.464L57.9,18.307A9.048,9.048,0,0,0,58,17.013Z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M32.851,7.039c-.284-.008-.565-.026-.851-.026-16.566,0-29.995,10.742-30,23.994S15.434,55,32,55a37.049,37.049,0,0,0,7.512-.789L56,61l-.975-14.624A21.269,21.269,0,0,0,62,31.008v-.022" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polygon fill="none" points="2 31.013 2 31.007 2 31 2 31.013" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Messaging;