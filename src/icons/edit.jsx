import React from 'react';

function Edit(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<line fill="none" strokeLinecap="butt" x1="36" x2="47" y1="12" y2="23"/>
		<line fill="none" x1="4" x2="60" y1="59" y2="59"/>
		<polygon fill="none" points="21 49 6 53 10 38 44 4 55 15 21 49" stroke={fill}/>
	</g>
</svg>
	);
};

export default Edit;