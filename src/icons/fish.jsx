import React from 'react';

function Fish(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
		<path d="M56.549,32.434 c-6.211-1.087-11.564-3.896-16.36-8.692c-4.792-4.792-6.899-10.507-7.989-16.711" fill="none" stroke={secondaryfill} strokeLinecap="butt"/>
		<path d="M23.407,15.459 c-1.807-2.913-4.523-5.505-7.537-6.432c4.079-4.079,11.544-3.996,16.329-1.996c11.242-5.987,25.956-1.257,25.956-1.257 s6.491,19.531-4.879,30.901c-13.475,13.475-34.153,8.132-34.153,8.132S14.948,28.541,23.407,15.459z" fill="none" stroke={fill}/>
		<polyline fill="none" points="19.123,44.807 4.486,46.433 17.497,59.444 19.123,44.807 " stroke={secondaryfill} strokeLinecap="butt"/>
		<circle cx="43.5" cy="11.5" fill="none" r="1.5" stroke={fill}/>
		<circle cx="43.5" cy="11.5" fill={fill} r="1.5" stroke="none"/>
	</g>
</svg>
	);
};

export default Fish;