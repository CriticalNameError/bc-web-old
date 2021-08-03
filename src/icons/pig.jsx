import React from 'react';

function Pig(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<circle cx="19" cy="35" fill="none" r="3" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="37" cy="8" fill="none" r="6" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="31" x2="43" y1="28" y2="28"/>
		<path d="M45,22H25 c-0.003,0-0.005,0-0.008,0C20.208,13.788,12,16,12,16l3.073,9.219C12.106,27.36,9.85,30.422,8.75,34H2v14h8.597 c2.323,3.71,6.032,6.457,10.403,7.516V62h10v-6h10v6h10v-7.11c6.424-2.427,11-8.616,11-15.89v0C62,29.611,54.389,22,45,22z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Pig;