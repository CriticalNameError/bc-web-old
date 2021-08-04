import React from 'react';

function LogoLinkedin(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<g>
		<path d="M44.44853,0H3.54103C1.58791,0,0.00067,1.54948,0.00067,3.46093V44.5364 C0.00067,46.44787,1.58791,48,3.54103,48h40.90751c1.95707,0,3.5508-1.55213,3.5508-3.4636V3.46093 C47.99933,1.54948,46.4056,0,44.44853,0z" fill="#007BB5"/>
		<path d="M7.11264,17.9948h7.12629v22.90627H7.11264V17.9948z M10.67775,6.60807 c2.27735,0,4.12625,1.84961,4.12625,4.12827c0,2.27929-1.84891,4.12887-4.12625,4.12887c-2.28645,0-4.1302-1.84957-4.1302-4.12887 C6.54755,8.45768,8.39129,6.60807,10.67775,6.60807" fill="#FFFFFF"/>
		<path d="M18.70507,17.9948h6.82427v3.13147h0.0976c0.9492-1.8008,3.27213-3.69987,6.73573-3.69987 c7.20827,0,8.5404,4.74293,8.5404,10.91213v12.56253h-7.11853V29.76173c0-2.65627-0.0456-6.0736-3.6992-6.0736 c-3.7044,0-4.2696,2.8952-4.2696,5.88347v11.32947h-7.11067V17.9948z" fill="#FFFFFF"/>
	</g>
</svg>
	);
};

export default LogoLinkedin;