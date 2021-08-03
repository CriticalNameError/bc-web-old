import React from 'react';

function Nodes(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<circle cx="32.001" cy="32" fill="none" r="5" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<circle cx="32.001" cy="7" fill="none" r="5" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<circle cx="10" cy="19" fill="none" r="5" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="54" cy="19" fill="none" r="5" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<circle cx="10" cy="45" fill="none" r="5" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<circle cx="54" cy="45" fill="none" r="5" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<circle cx="31.999" cy="57" fill="none" r="5" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="32" x2="32" y1="12" y2="22"/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="32" x2="32" y1="42" y2="52"/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="18.776" x2="27.614" y1="14.213" y2="9.393"/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="23.223" x2="14.39" y1="52.213" y2="47.395"/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="10" x2="10" y1="35" y2="24"/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="54" x2="54" y1="29" y2="40"/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="49.61" x2="40.777" y1="16.605" y2="11.788"/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="23.403" x2="14.302" y1="26.92" y2="21.542"/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="23.403" x2="14.302" y1="37.08" y2="42.458"/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="40.599" x2="49.698" y1="26.919" y2="21.542"/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="49.698" x2="40.599" y1="42.458" y2="37.081"/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="45.224" x2="36.389" y1="49.787" y2="54.605"/>
	</g>
</svg>
	);
};

export default Nodes;