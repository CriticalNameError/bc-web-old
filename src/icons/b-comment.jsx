import React from 'react';

function BComment(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<path d=" M27.001,50.911C30.711,53.453,35.615,55,41,55c2.403,0,4.702-0.323,6.852-0.889L56,59v-8.813c3.708-2.885,6-6.831,6-11.187 c0-2.124-0.545-4.149-1.532-6.001" fill="none"/>
		<path d="M29,3 C14.088,3,2,12.402,2,24c0,4.997,2.253,9.58,6,13.186V51l13.626-6.813C23.973,44.705,26.44,45,29,45c14.912,0,27-9.402,27-21 C56,12.402,43.912,3,29,3z" fill="none" stroke={fill}/>
	</g>
</svg>
	);
};

export default BComment;