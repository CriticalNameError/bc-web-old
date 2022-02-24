import React from 'react';

function PositionPin(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<path d="M52,21.091 c0,11.783-20,32.837-20,32.837S12,32.874,12,21.091C12,9.01,22.335,2,32,2S52,9.01,52,21.091z" fill="none" stroke={fill}/>
		<path d="M18,47.07 C9.631,48.454,4,51.039,4,54c0,4.418,12.536,8,28,8s28-3.582,28-8c0-2.961-5.631-5.546-14-6.93" fill="none"/>
		<circle cx="32" cy="22" fill="none" r="6" stroke={fill}/>
	</g>
</svg>
	);
};

export default PositionPin;