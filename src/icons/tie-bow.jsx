import React from 'react';

function TieBow(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="38" x2="46" y1="32" y2="32"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="26" x2="18" y1="32" y2="32"/>
		<path d="M37.6,23.8L53.1,15 c4-2.3,8.9,0.6,8.9,5.2v23.5c0,4.6-4.9,7.5-8.9,5.2l-15.5-8.7" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M26.4,23.7L10.9,15 c-4-2.2-8.9,0.6-8.9,5.2v23.5c0,4.6,4.9,7.5,8.9,5.2l15.5-8.7" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M32,44L32,44 c-3.3,0-6-2.7-6-6V26c0-3.3,2.7-6,6-6h0c3.3,0,6,2.7,6,6v12C38,41.3,35.3,44,32,44z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default TieBow;