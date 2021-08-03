import React from 'react';

function PrivacySettings(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M62,36V28l-8.595-1.074a21.817,21.817,0,0,0-2.681-6.474l5.317-6.836L50.384,7.959l-6.836,5.317A21.885,21.885,0,0,0,37.074,10.6L36,2H28l-1.074,8.6a21.817,21.817,0,0,0-6.474,2.681L13.616,7.959,7.959,13.616l5.317,6.836A21.885,21.885,0,0,0,10.6,26.926L2,28v8l8.6,1.074a21.817,21.817,0,0,0,2.681,6.474L7.959,50.384l5.657,5.657,6.836-5.317a21.9,21.9,0,0,0,6.474,2.681L28,62h8l1.074-8.595a21.817,21.817,0,0,0,6.474-2.681l6.836,5.317,5.657-5.657-5.317-6.836a21.9,21.9,0,0,0,2.681-6.474Z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x1="32" x2="32" y1="36" y2="42"/>
		<circle cx="32" cy="30" fill="none" r="6" stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default PrivacySettings;