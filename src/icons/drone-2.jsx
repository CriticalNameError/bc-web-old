import React from 'react';

function Drone2(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M20.364,20.364A9,9,0,1,1,23,14" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M43.636,43.636A9,9,0,1,0,50,41" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M43.636,20.364A9,9,0,1,1,50,23" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M20.364,43.636A9,9,0,1,0,23,50" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polygon fill="none" points="38 38 26 38 24 24 40 24 38 38" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="14" x2="24" y1="14" y2="24"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="26" x2="14" y1="38" y2="50"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="38" x2="50" y1="38" y2="50"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth} x1="40" x2="50" y1="24" y2="14"/>
	</g>
</svg>
	);
};

export default Drone2;