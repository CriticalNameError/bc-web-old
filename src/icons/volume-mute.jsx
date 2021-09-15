import React from 'react';

function VolumeMute(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<path d="M48.729,40.587a12.143,12.143,0,0,0,0-17.173" fill="none" stroke={fill}/>
		<path d="M55.6,47.456a21.858,21.858,0,0,0,0-30.912" fill="none" stroke={fill}/>
		<path d="M20,44H8a5,5,0,0,1-5-5V25a5,5,0,0,1,5-5H21L43,4V21" fill="none" stroke={fill} strokeLinecap="butt"/>
		<polyline fill="none" points="43 29 43 60 25.125 47" stroke={fill}/>
		<line fill="none" x1="59" x2="5" y1="5" y2="59"/>
	</g>
</svg>
	);
};

export default VolumeMute;