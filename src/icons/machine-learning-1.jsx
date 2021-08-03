import React from 'react';

function MachineLearning1(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="32" x2="32" y1="29" y2="13"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="11.054" x2="27.946" y1="23.081" y2="10.919"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="14.563" x2="8.437" y1="51.211" y2="30.789"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="43" x2="21" y1="56" y2="56"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="36.054" x2="53" y1="10.919" y2="23.12"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="36.762" x2="52.237" y1="32.476" y2="27.524"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="11.763" x2="27.238" y1="27.524" y2="32.476"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="18.938" x2="29.06" y1="51.96" y2="38.042"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="45.061" x2="34.94" y1="51.959" y2="38.042"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth} x1="55.563" x2="49.437" y1="30.789" y2="51.211"/>
		<circle cx="32" cy="34" fill="none" r="5" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="32" cy="8" fill="none" r="5" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="57" cy="26" fill="none" r="5" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="48" cy="56" fill="none" r="5" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="16" cy="56" fill="none" r="5" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="7" cy="26" fill="none" r="5" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default MachineLearning1;