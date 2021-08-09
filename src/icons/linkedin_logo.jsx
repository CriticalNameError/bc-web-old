import React from 'react';

function Linkedin_logo(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} role="img" style={{"maxWidth":"1.6em","height":"auto"}} width={width} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path id="path" d="M336 332v457H211V332h125m10-126c0 41-33 74-73 74s-72-33-72-74c0-40 32-73 72-73s73 33 73 73m488 302v281H709V556c0-140-166-129-166 0v233H419V332h124v74c58-108 291-116 291 102" fill={fill} fillOpacity="1" opacity="1" vectorEffect="none"/>
	</g>
</svg>
	);
};

export default Linkedin_logo;