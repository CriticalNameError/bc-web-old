import React from 'react';

function BulbAnimated(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<line class="animated fadeIn slower" fill="none" x1="2" x2="8" y1="32" y2="32"/>
		<line class="animated fadeIn slow "fill="none" x1="10.787" x2="15.029" y1="10.787" y2="15.029"/>
		<line class="animated fadeIn " fill="none" x1="32" x2="32" y1="2" y2="8"/>
		<line class="animated fadeIn slow" fill="none" x1="53.213" x2="48.971" y1="10.787" y2="15.029"/>
		<line class="animated fadeIn slower" fill="none" x1="62" x2="56" y1="32" y2="32"/>
		<line  fill="none" stroke={fill} x1="25" x2="39" y1="62" y2="62"/>
		<path class="animated fadeIn fast" d="M49,32 c0-9.389-7.611-17-17-17s-17,7.611-17,17c0,6.891,4.107,12.81,10,15.48V56h14v-8.52C44.893,44.81,49,38.891,49,32z" fill="none" stroke={fill}/>
	</g>
</svg>
	);
};

export default BulbAnimated;