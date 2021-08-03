import React from 'react';

function Medal(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<polyline fill="none" points="30.266 22.075 22 2 4 2 15.698 30.41" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polyline fill="none" points="33.734 22.075 42 2 60 2 48.302 30.41" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<circle cx="32" cy="42" fill="none" r="20" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polygon fill="none" points="32 31.538 35.401 38.426 43 39.53 37.5 44.892 38.798 52.462 32 48.888 25.202 52.462 26.5 44.892 21 39.53 28.599 38.426 32 31.538" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Medal;