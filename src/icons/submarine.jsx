import React from 'react';

function Submarine(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M52,29H27C14,29,2,33,2,39S14,49,26,49H52a10,10,0,0,0,0-20Z" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M37,9a4,4,0,0,0-4,4v6" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="44 29 42 19 24 19 21.96 29.202" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polyline fill="none" points="13.438 47.497 10 53 6 52.998 6 44.544" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polyline fill="none" points="6 33.483 6 25 10 25.002 13.48 30.557" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<circle cx="49" cy="39" fill="none" r="1" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<circle cx="39" cy="39" fill="none" r="1" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<circle cx="29" cy="39" fill="none" r="1" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<circle cx="19" cy="39" fill="none" r="1" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Submarine;