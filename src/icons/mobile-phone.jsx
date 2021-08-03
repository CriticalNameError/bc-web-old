import React from 'react';

function MobilePhone(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<line fill="none" strokeLinecap="butt" x1="11" x2="53" y1="11" y2="11"/>
		<line fill="none" strokeLinecap="butt" x1="11" x2="53" y1="51" y2="51"/>
		<path d="M48,62H16a5,5,0,0,1-5-5V7a5,5,0,0,1,5-5H48a5,5,0,0,1,5,5V57A5,5,0,0,1,48,62Z" fill="none" stroke={fill}/>
	</g>
</svg>
	);
};

export default MobilePhone;