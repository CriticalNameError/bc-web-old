import React from 'react';

function Telephone(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<circle cx="32" cy="44" fill="none" r="8" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M19,29,5,47v8a5,5,0,0,0,5,5H54a5,5,0,0,0,5-5V47L45,29Z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M22.944,18.858,22.3,13.036a38.609,38.609,0,0,1,19.4,0l-.647,5.822A3.109,3.109,0,0,0,43.032,22.1l9.587,3.691a3.109,3.109,0,0,0,3.8-1.328L60.57,17.4a3.125,3.125,0,0,0-.81-4.074,46.121,46.121,0,0,0-55.521,0,3.126,3.126,0,0,0-.81,4.073l4.157,7.07a3.109,3.109,0,0,0,3.8,1.326L20.968,22.1A3.112,3.112,0,0,0,22.944,18.858Z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Telephone;