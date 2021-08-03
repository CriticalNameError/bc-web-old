import React from 'react';

function Gymnastics(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<circle cx="45" cy="50" fill="none" r="6" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M57.208,31.816l-15.691,1.87L36.464,19.778,49,7.24A3.113,3.113,0,0,0,49.231,3a3,3,0,0,0-4.352-.116L29.952,17.826A4,4,0,0,1,27.122,19H6.17A3.114,3.114,0,0,0,3,21.838,3,3,0,0,0,6,25H23.466L29,40.232v19.2A2.562,2.562,0,0,0,31.563,62h0a2.563,2.563,0,0,0,2.559-2.434L35,42.079l5.794-2.173,17.161-3.028a2.56,2.56,0,0,0,2.076-2.965h0A2.56,2.56,0,0,0,57.208,31.816Z" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default Gymnastics;