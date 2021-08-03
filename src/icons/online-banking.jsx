import React from 'react';

function OnlineBanking(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M7,41V13a5,5,0,0,1,5-5H52a5,5,0,0,1,5,5V41" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M40,47v4H24V47H2v1a8,8,0,0,0,8,8H54a8,8,0,0,0,8-8V47Z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M38,19.41c-2.912-1.6-12.085-2.8-12.085,2.719,0,6.6,11.648,4.271,11.648,10.095s-7.571,5.387-12.813,3.493" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="32" x2="32" y1="15" y2="41"/>
	</g>
</svg>
	);
};

export default OnlineBanking;