import React from 'react';

function Logic(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<path d="M50,62V43.853A23.989,23.989,0,1,0,10,26v2L5,39l5,3v8a6,6,0,0,0,6,6H26v6" fill="none" stroke={fill}/>
		<path d="M43,26a9.025,9.025,0,0,0-.1-1.293l3.361-3.475-2-3.464-4.686,1.173a8.963,8.963,0,0,0-2.246-1.3L36,13H32l-1.326,4.643a8.963,8.963,0,0,0-2.246,1.3L23.742,17.77l-2,3.464L25.1,24.707a8.187,8.187,0,0,0,0,2.586l-3.361,3.475,2,3.464,4.686-1.173a8.963,8.963,0,0,0,2.246,1.3L32,39h4l1.326-4.643a8.963,8.963,0,0,0,2.246-1.3l4.686,1.173,2-3.464L42.9,27.293A9.025,9.025,0,0,0,43,26Z" fill="none"/>
		<circle cx="34" cy="26" fill="none" r="3"/>
	</g>
</svg>
	);
};

export default Logic;