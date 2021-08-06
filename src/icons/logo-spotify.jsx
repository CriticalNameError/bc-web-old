import React from 'react';

function LogoSpotify(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<g>
		<path d="M24,0C10.8,0,0,10.8,0,24s10.8,24,24,24s24-10.8,24-24S37.32,0,24,0z" fill="#1ED75F"/>
		<path d="M35.04,34.68c-0.48,0.72-1.32,0.96-2.04,0.48c-5.64-3.48-12.72-4.2-21.12-2.28 c-0.84,0.24-1.56-0.36-1.8-1.08c-0.24-0.84,0.36-1.56,1.08-1.8c9.12-2.04,17.04-1.2,23.28,2.64C35.28,33,35.4,33.96,35.04,34.68z M37.92,28.08c-0.6,0.84-1.68,1.2-2.52,0.6c-6.48-3.96-16.32-5.16-23.88-2.76c-0.96,0.24-2.04-0.24-2.28-1.2 c-0.24-0.96,0.24-2.04,1.2-2.28c8.76-2.64,19.56-1.32,27,3.24C38.16,26.04,38.52,27.24,37.92,28.08z M38.16,21.36 c-7.68-4.56-20.52-5.04-27.84-2.76c-1.2,0.36-2.4-0.36-2.76-1.44C7.2,15.96,7.92,14.76,9,14.4c8.52-2.52,22.56-2.04,31.44,3.24 c1.08,0.6,1.44,2.04,0.84,3.12C40.68,21.6,39.24,21.96,38.16,21.36z" fill="#191515"/>
	</g>
</svg>
	);
};

export default LogoSpotify;