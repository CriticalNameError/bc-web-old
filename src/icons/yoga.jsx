import React from 'react';

function Yoga(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<circle cx="32" cy="9" fill="none" r="6" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="2" x2="62" y1="59" y2="59"/>
		<path d="M20,50.92,16.813,49.9A4.046,4.046,0,0,1,14,46.046h0A4.047,4.047,0,0,1,18.046,42H24V28l-6.007,5.242a3,3,0,0,1-3.657.254L8.05,29.305a2.655,2.655,0,0,1-.737-3.683h0a2.657,2.657,0,0,1,3.393-.905l5.031,2.5,7.27-6.461A3,3,0,0,1,25,20H39a3,3,0,0,1,1.993.758l7.27,6.461,5.031-2.5a2.657,2.657,0,0,1,3.393.905h0a2.655,2.655,0,0,1-.737,3.683L49.664,33.5a3,3,0,0,1-3.657-.254L40,28V42h6.051A3.949,3.949,0,0,1,50,45.949h0a3.948,3.948,0,0,1-2.952,3.821L30.015,54.214a3.33,3.33,0,0,1-4-2.17h0a3.33,3.33,0,0,1,1.99-4.171L33,46" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Yoga;