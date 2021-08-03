import React from 'react';

function BookBookmark(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<polyline fill="none" points="31 2 31 24 24 20 17 24 17 2" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M7,57H7a5,5,0,0,0,5,5H52a5,5,0,0,0,5-5V48" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M52,2H12A5,5,0,0,0,7,7V57H7a5,5,0,0,1,5-5H52a5,5,0,0,0,5-5V7A5,5,0,0,0,52,2Z" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default BookBookmark;