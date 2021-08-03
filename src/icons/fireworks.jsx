import React from 'react';

function Fireworks(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M2,22a7,7,0,0,0,7-7,7,7,0,0,0,7,7" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M2,22a7,7,0,0,1,7,7,7,7,0,0,1,7-7" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M48,22a7,7,0,0,0,7-7,7,7,0,0,0,7,7" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M48,22a7,7,0,0,1,7,7,7,7,0,0,1,7-7" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M47,29a13.337,13.337,0,0,0-9,7" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M17,29a13.337,13.337,0,0,1,9,7" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M17,42a11.743,11.743,0,0,1,5-.426C26.363,42.165,32,45.7,32,60" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M47,42a11.743,11.743,0,0,0-5-.426C37.637,42.165,32,45.7,32,60" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polygon fill="none" points="37.783 9.201 33.787 8.62 32 5 30.213 8.62 26.217 9.201 29.108 12.02 28.426 16 32 14.122 35.574 16 34.892 12.02 37.783 9.201" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polygon fill="none" points="58.744 48.201 54.748 47.62 52.961 44 51.173 47.62 47.177 48.201 50.069 51.02 49.386 55 52.961 53.122 56.535 55 55.852 51.02 58.744 48.201" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polygon fill="none" points="16.783 47.201 12.787 46.62 11 43 9.213 46.62 5.217 47.201 8.108 50.02 7.426 54 11 52.122 14.574 54 13.892 50.02 16.783 47.201" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="32" x2="32" y1="22" y2="40"/>
	</g>
</svg>
	);
};

export default Fireworks;