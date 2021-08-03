import React from 'react';

function PersonalTrainer(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M43,60V32.816l5.717,5.457-4.906,7.415a3.5,3.5,0,0,0,5.378,4.481l7-9.928a3.5,3.5,0,0,0-.272-4.773l-11-10.5A3.5,3.5,0,0,0,42.5,24h-21a3.5,3.5,0,0,0-2.417.968l-11,10.5a3.5,3.5,0,0,0-.272,4.773l7,9.928a3.5,3.5,0,0,0,5.378-4.481l-4.906-7.415L21,32.816V60" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="32" cy="11" fill="none" r="8" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="33" x2="38" y1="33" y2="33"/>
	</g>
</svg>
	);
};

export default PersonalTrainer;