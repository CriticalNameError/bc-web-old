import React from 'react';

function Favorite(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M57.207,10.793 c-6.39-6.39-16.751-6.39-23.142,0c-0.787,0.787-1.472,1.636-2.066,2.529c-0.593-0.892-1.279-1.742-2.066-2.529 c-6.39-6.39-16.751-6.39-23.142,0c-6.391,6.39-6.391,16.751,0,23.142L32,59.142l25.207-25.207 C63.598,27.544,63.598,17.183,57.207,10.793z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Favorite;