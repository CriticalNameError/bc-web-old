import React from 'react';

function Clover(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="32" x2="32" y1="43.09091" y2="62"/>
		<path d="M53,18.27273 c0-3.16193-3.22159-5.30966-6.75173-4.49972L40.3708,15.6292l1.85619-5.87747C43.03693,6.22159,40.88921,3,37.72727,3 C34.32671,3,32,4.90909,32,4.90909S29.6733,3,26.27273,3c-3.16193,0-5.30966,3.22159-4.49972,6.75173l1.85619,5.87747 l-5.87747-1.85619C14.22159,12.96307,11,15.1108,11,18.27273C11,21.6733,12.90909,24,12.90909,24S11,26.3267,11,29.72727 c0,3.16193,3.22159,5.30966,6.75173,4.49972l5.87747-1.85619l-1.85619,5.87747C20.96307,41.77841,23.1108,45,26.27273,45 C29.6733,45,32,43.09091,32,43.09091S34.32671,45,37.72727,45c3.16193,0,5.30966-3.22159,4.49972-6.75173L40.3708,32.3708 l5.87747,1.85619C49.77841,35.03693,53,32.88921,53,29.72727C53,26.3267,51.09091,24,51.09091,24S53,21.6733,53,18.27273z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Clover;