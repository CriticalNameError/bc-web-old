import React from 'react';

function Rotate23(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M10.0284,32.67949 C10.71186,20.03692,21.18689,10,34,10c2.7118,0,5.34134,0.4554,7.77252,1.2844" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M49.99999,8h0.00002 C56.60001,8,62,13.39999,62,19.99999v0.00002C62,26.60001,56.60001,32,50.00001,32h-0.00002C43.39999,32,38,26.60001,38,20.00001 v-0.00002C38,13.39999,43.39999,8,49.99999,8z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M13.99999,32h0.00002 C20.60001,32,26,37.39999,26,43.99999v0.00002C26,50.60001,20.60001,56,14.00001,56h-0.00002C7.39999,56,2,50.60001,2,44.00001 v-0.00002C2,37.39999,7.39999,32,13.99999,32z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Rotate23;