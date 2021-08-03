import React from 'react';

function Jewel(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="23" x2="15" y1="47" y2="59"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="17" x2="5" y1="41" y2="49"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="47" x2="59" y1="41" y2="49"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="41" x2="49" y1="47" y2="59"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="41" x2="49" y1="17" y2="5"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="47" x2="59" y1="23" y2="15"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="17" x2="5" y1="23" y2="15"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="23" x2="15" y1="17" y2="5"/>
		<polygon fill="none" points="23 47 17 41 17 22.625 22.625 17 41.375 17 47 22.625 47 41.375 41.375 47 23 47" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<polygon fill="none" points="15 59 5 49 5 15 15 5 49 5 59 15 59 49 49 59 15 59" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Jewel;