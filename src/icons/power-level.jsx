import React from 'react';

function PowerLevel(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="25" x2="25" y1="11.02814" y2="3"/>
		<path d=" M20.02948,41.48472C19.76177,39.29187,21,21,21,21s6.70282,17.32242,6.97052,19.51528 c0.26771,2.19286-1.29294,4.18754-3.4858,4.45524C22.29186,45.23823,20.29718,43.67758,20.02948,41.48472z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M9.4751,18.36621 l-6.4502-4.73242C7.90967,6.9751,15.75098,3,24,3c8.24756,0,16.0874,3.97363,20.97217,10.62988l-6.44922,4.7334 C35.13916,13.75244,29.70996,11,24,11C18.28857,11,12.85889,13.75391,9.4751,18.36621z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default PowerLevel;