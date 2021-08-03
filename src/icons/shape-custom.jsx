import React from 'react';

function ShapeCustom(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M44.185,8.583l.865,13.11L60,24.036c2.08.326,2.721,2.456,1.054,3.5L43.085,38.834l-4.73,16.913c-.4,1.435-2.547,2.033-3.976,1.108L22.544,49.2,5.57,55.786c-2.147.834-4.381-1.006-3.278-2.7l9.523-14.626-7.5-11.88c-.764-1.209.181-2.662,1.857-2.856l19.553-2.263L39.779,7.447C41.2,6.027,44.065,6.765,44.185,8.583Z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default ShapeCustom;