import React from 'react';

function Handshake(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M48.044,38.171l3.809,3.808a3.929,3.929,0,0,1,0,5.554h0a3.928,3.928,0,0,1-5.555,0l-3.807-3.806" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M36.974,49.244l1.787,1.788a3.9,3.9,0,0,1,0,5.515h0A3.888,3.888,0,0,1,36,57.689" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M12.631,40.383l-.58.58a3.794,3.794,0,0,1-5.5-.136h0a3.8,3.8,0,0,1,.092-5.195l.58-.593a3.8,3.8,0,0,1,5.343-.091h0A3.8,3.8,0,0,1,12.631,40.383Z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M45.537,46.776a3.9,3.9,0,0,1,0,5.516h0a3.9,3.9,0,0,1-5.515,0L38.73,51" fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M50.776,40.9a3.8,3.8,0,0,0,5.5-.136h0a3.8,3.8,0,0,0-.092-5.195L43.476,22.51" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M57,29V23l4-4L47,5,44,8H37.447a12.067,12.067,0,0,0-8.534,3.535l-9.206,9.571a3.4,3.4,0,0,0,4.349,5.185l9.8-6.318a8.908,8.908,0,0,0,13.483-.14" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<polyline fill="none" points="7 29 7 23 3 19 17 5 20 8 25 8" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<rect height="7.855" width="9.312" fill="none" rx="3.928" ry="3.928" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} transform="translate(-26.504 23.331) rotate(-45)" x="10.254" y="39.731"/>
		<rect height="7.8" width="8.544" fill="none" rx="3.9" ry="3.9" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} transform="translate(-30.208 34.745) rotate(-45)" x="22.565" y="49.937"/>
		<rect height="7.8" width="8.212" fill="none" rx="3.9" ry="3.9" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} transform="translate(-28.408 29.029) rotate(-45)" x="16.731" y="44.906"/>
	</g>
</svg>
	);
};

export default Handshake;