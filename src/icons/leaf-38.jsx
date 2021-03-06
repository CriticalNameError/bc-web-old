import React from 'react';

function Leaf38(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d=" M45.568,50.125c0,0-4.795,7.407-12.612,8.776C26.951,59.953,20,52.245,20,52.245s4.684-5.234,10.69-6.286 C37.744,44.723,45.568,50.125,45.568,50.125z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M3,36.81 c0,0,5.443-4.529,11.758-3.711c4.852,0.629,8.336,8.194,8.336,8.194s-4.839,2.891-9.691,2.262C7.704,42.817,3,36.81,3,36.81z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M30.688,29 c0,0-5.196-5.651-4.648-12.533c0.421-5.288,8.427-9.465,8.427-9.465s3.39,5.085,2.969,10.372C36.941,23.585,30.688,29,30.688,29z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d=" M46.504,26.512c0,0-4.533,7.513-2.352,15.097c1.676,5.827,11.594,8.683,11.594,8.683s2.639-6.467,0.963-12.294 C54.741,31.154,46.504,26.512,46.504,26.512z" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M60,51C34,51,16,31,16,5" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Leaf38;