import React from 'react';

function Atom(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<circle cx="32" cy="32" fill="none" r="4" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<ellipse cx="32" cy="32" fill="none" rx="11" ry="30" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<ellipse cx="32" cy="32" fill="none" rx="11" ry="30" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} transform="matrix(0.5 -0.866 0.866 0.5 -11.7128 43.7128)"/>
		<ellipse cx="32" cy="32" fill="none" rx="11" ry="30" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} transform="matrix(0.5 0.866 -0.866 0.5 43.7128 -11.7128)"/>
	</g>
</svg>
	);
};

export default Atom;