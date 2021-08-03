import React from 'react';

function Attachment(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M48,16v28 c0,8.8-7.2,16-16,16h0c-8.8,0-16-7.2-16-16V15c0-6.1,4.9-11,11-11h0c6.1,0,11,4.9,11,11v27c0,3.3-2.7,6-6,6h0c-3.3,0-6-2.7-6-6V16" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Attachment;