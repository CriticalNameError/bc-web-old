import React from 'react';

function BottleWine(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 40.1 122.88" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path className="st0" d="M30.6 32.25c-.99.01-1.71-.43-2.23-1.22-.98-1.5-.89-3.13-.89-4.83V.93c0-.51-.42-.93-.93-.93h-13.1c-.51 0-.93.42-.93.93v25.59c0 1.54.09 2.67-.74 4.08-.58.97-1.44 1.65-2.55 2.09-2.38 1-4.32 2.48-5.84 4.44C1.82 39.15.71 41.68.02 44.68v70.77c-.15 3.52 1.02 5.79 3.47 6.85 1.43.61 2.32.56 3.81.56h22.3c1.65 0 3.19.07 4.82-.22 4.11-.73 5.6-2.9 5.68-6.64V45.87c-.43-7.12-4.55-10.76-9.5-13.62zM9.07 52.98h21.96c1.59 0 2.89 1.3 2.89 2.89v35.44c0 1.59-1.3 2.89-2.89 2.89H9.07c-1.59 0-2.89-1.3-2.89-2.89V55.87c0-1.59 1.3-2.89 2.89-2.89z" fillRule="evenodd"/>
	</g>
</svg>
	);
};

export default BottleWine;