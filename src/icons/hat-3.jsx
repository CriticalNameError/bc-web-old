import React from 'react';

function Hat3(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<path d="M12,22v20c0,4.971,8.954,9,20,9 c11.046,0,20-4.029,20-9V22" fill="none" stroke={fill} strokeLinecap="butt"/>
		<polyline fill="none" points="44,54 49,61 39,61 44,54 44,26 " strokeLinecap="butt"/>
		<polygon fill="none" points="32,32 4,18 32,4 60,18 " stroke={fill}/>
	</g>
</svg>
	);
};

export default Hat3;