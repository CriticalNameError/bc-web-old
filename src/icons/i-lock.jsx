import React from 'react';

function ILock(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<g className="nc-interact_lock-o-32">
			<rect height="16" width="26" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="3" y="15"/>
			<path d="M9,15V8a7,7,0,0,1,7-7h0a7,7,0,0,1,7,7v7" fill="none" stroke={fill} strokeDasharray="35.99 35.99" strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
			<circle cx="16" cy="23" fill="none" r="3" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		</g>
	</g>
</svg>
	);
};

export default ILock;