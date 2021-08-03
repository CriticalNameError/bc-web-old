import React from 'react';

function Bouquet(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M47,14a9,9,0,0,1,9-9v8a8.987,8.987,0,0,1-14.414,7.176" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M57.349,27.5a5.122,5.122,0,0,0-7.243,0,5.121,5.121,0,0,1-7.242,0,5.122,5.122,0,0,0-7.243,0,5.121,5.121,0,0,1-7.242,0,5.122,5.122,0,0,0-7.243,0,5.121,5.121,0,0,1-7.242,0,5.122,5.122,0,0,0-7.243,0L27,50H37Z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M17,14A9,9,0,0,0,8,5v8a8.987,8.987,0,0,0,14.414,7.176" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M23,5.435a17.979,17.979,0,0,0-7.081,4.286" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M30.919,6.721C33.582,4.235,37.111,2,41,2v8a9,9,0,0,1-18,0V2a9,9,0,0,1,9,9" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M41,5.435a17.99,17.99,0,0,1,7.082,4.286" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polyline fill="none" points="27 50 23 62 41 62 37 50" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="32" x2="32" y1="50" y2="44"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="32" x2="32" y1="19" y2="23"/>
	</g>
</svg>
	);
};

export default Bouquet;