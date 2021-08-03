import React from 'react';

function DotsToClose(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill}>
		<g className="nc-interact_dots-close-o-32">
			<g className="nc-dot_left">
				<circle cx="6" cy="16" fill={fill} r="1"/>
				<circle cx="6" cy="16" fill="none" r="1" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
			</g>
			<g className="nc-dot_right">
				<circle cx="26" cy="16" fill={fill} r="1"/>
				<circle cx="26" cy="16" fill="none" r="1" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
			</g>
			<g className="nc-dot_center">
				<circle cx="16" cy="16" fill={fill} r="1"/>
				<circle cx="16" cy="16" fill="none" r="1" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
			</g>
			<path className="nc-line_top-right" d="M16 16L27 5" fill="none" opacity="0" stroke={fill} strokeDasharray="15.56 15.56" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
			<path className="nc-line_bottom-left" d="M5 27l11-11" fill="none" opacity="0" stroke={fill} strokeDasharray="15.56 15.56" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
			<path className="nc-line_bottom-right" d="M16 16l11 11" fill="none" opacity="0" stroke={fill} strokeDasharray="15.56 15.56" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
			<path className="nc-line_top-left" d="M5 5l11 11" fill="none" opacity="0" stroke={fill} strokeDasharray="15.56 15.56" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		</g>
	</g>
</svg>
	);
};

export default DotsToClose;