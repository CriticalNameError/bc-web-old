import React from 'react';

function Leaf1531(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 350 350" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path id="icon" d="M30.648 90h-4.666a1 1 0 0 1-.998-1.063c1.473-23.129 7.78-37.706 23.516-52.984C36.513 42.756 24.843 54.734 22.839 71.2a.999.999 0 1 1-1.839.411c-8.808-14.02-8.505-26.712.952-39.944 5.454-7.272 13.28-11.279 20.185-14.815 8.346-4.273 15.554-7.964 17.098-16.04a.999.999 0 0 1 1.839-.329C71.928 18.46 80.872 36.311 71.233 57.025c-7.694 13.752-20.459 20.112-37.994 18.96a60.166 60.166 0 0 0-1.59 13.028 1.001 1.001 0 0 1-1.001.987zm-3.596-2h2.617a62.212 62.212 0 0 1 1.825-13.313.998.998 0 0 1 1.049-.757c17.367 1.366 29.437-4.464 36.911-17.814 8.859-19.047 1.472-35.189-8.879-52.575-2.563 7.429-9.851 11.161-17.526 15.091-7.04 3.604-14.319 7.332-19.483 14.216-8.376 11.72-9.128 23.011-2.278 35.324 3.534-18.634 18.924-31.329 32.625-37.12a1 1 0 1 1 1.049 1.673C36.16 49.192 28.777 63.753 27.052 88z" fill={fill} fillRule="nonzero" opacity="1" stroke="none" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="1" transform="matrix(3.89 0 0 3.89 -1.944 -1.944)"/>
	</g>
</svg>
	);
};

export default Leaf1531;