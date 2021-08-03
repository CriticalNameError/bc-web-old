import React from 'react';

function CurrencyExchange2(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<polygon fill="none" points="55.8 55.8 46 57.2 47.4 47.4 55.8 55.8" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polygon fill="none" points="16.6 16.6 18 6.8 8.2 8.2 16.6 16.6" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M51.8,51.8A28,28,0,0,0,32,4" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M12.2,12.2A28,28,0,0,0,32,60" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M42,20c-4.546-2.362-19.148-4.144-19.148,3.984,0,9.73,18.182,6.3,18.182,14.882s-11.818,7.942-20,5.152" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="32" x2="32" y1="12" y2="52"/>
	</g>
</svg>
	);
};

export default CurrencyExchange2;