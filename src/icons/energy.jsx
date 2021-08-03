import React from 'react';

function Energy(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M38,25.773S40.6,10.7,30,4c0,4.692-2.523,9.288-7.05,13.31S9.91,30.359,10,40.012c.073,7.8,4.285,17.342,14.015,20.724C24.2,51.744,31.642,48.057,32,39c5.53,5.4,7.91,12.95,7.992,21.608C47,58.107,53.064,52.126,53.919,41.8c.9-10.879-5.946-20.082-9.206-23.8" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Energy;