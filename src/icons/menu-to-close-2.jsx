import React from 'react';

function MenuToClose2(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<g className="js-nc-int-icon nc-int-menu-to-close-2 js-nc-int-icon-loaded nc-int-icon-state-b">
			<line fill="none" stroke={fill} x1="2" x2="30" y1="8" y2="8"/>
			<line fill="none" stroke={fill} x1="30" x2="2" y1="24" y2="24"/>
			<line fill="none" stroke={fill} x1="30" x2="2" y1="16" y2="16"/>
			<line fill="none" x1="30" x2="2" y1="16" y2="16"/>
		</g>
	</g>
</svg>
	);
};

export default MenuToClose2;