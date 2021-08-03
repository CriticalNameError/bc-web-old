import React from 'react';

function User(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M60,53.174 c0-3.367-2.091-6.375-5.258-7.52C50.088,43.971,42.413,42,32,42s-18.088,1.971-22.742,3.654C6.091,46.799,4,49.806,4,53.174V62h56 V53.174z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M32,34L32,34 c-7.732,0-14-6.268-14-14v-4c0-7.732,6.268-14,14-14h0c7.732,0,14,6.268,14,14v4C46,27.732,39.732,34,32,34z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default User;