import React from 'react';

function VideoPlayer(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill}>
		<path d="M56,7H8a6.006,6.006,0,0,0-6,6V51a6.006,6.006,0,0,0,6,6H56a6.006,6.006,0,0,0,6-6V13A6.006,6.006,0,0,0,56,7ZM41.53,32.848l-16,10A1,1,0,0,1,24,42V22a1,1,0,0,1,1.53-.848l16,10a1,1,0,0,1,0,1.7Z" fill={fill}/>
	</g>
</svg>
	);
};

export default VideoPlayer;