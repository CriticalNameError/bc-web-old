import React from 'react';

function Sign24h(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="14" x2="28.641" y1="18" y2="8.173"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth} x1="50" x2="35.359" y1="18" y2="8.173"/>
		<rect height="42" width="60" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth} x="2" y="18"/>
		<circle cx="32" cy="6" fill="none" r="4" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M21.502,46.241h-9.678v-1.738l3.682-3.701c1.087-1.113,1.809-1.903,2.163-2.368 s0.613-0.903,0.776-1.313s0.244-0.85,0.244-1.318c0-0.645-0.193-1.152-0.581-1.523s-0.923-0.557-1.606-0.557 c-0.547,0-1.076,0.101-1.587,0.303s-1.102,0.566-1.772,1.094l-1.24-1.514c0.794-0.67,1.565-1.146,2.314-1.426s1.546-0.42,2.393-0.42 c1.328,0,2.393,0.347,3.193,1.04s1.201,1.626,1.201,2.798c0,0.645-0.115,1.256-0.347,1.836s-0.586,1.177-1.064,1.792 s-1.274,1.447-2.388,2.495l-2.48,2.402v0.098h6.777V46.241z" fill={secondaryfill} strokeLinejoin="miter"/>
		<path d="M33.426,43.126h-1.924v3.115h-2.236v-3.115h-6.523v-1.768l6.523-9.434h2.236v9.297 h1.924V43.126z M29.266,41.222v-3.584c0-1.276,0.032-2.321,0.098-3.135h-0.078c-0.183,0.43-0.469,0.951-0.859,1.562l-3.545,5.156 H29.266z" fill={secondaryfill} strokeLinejoin="miter"/>
		<path d="M41.414,31.964l-5.312,14.277h-2.168l5.322-14.277H41.414z" fill={secondaryfill} strokeLinejoin="miter"/>
		<path d="M44.08,46.241l5.645-12.236h-7.422v-2.021h9.873v1.602l-5.615,12.656H44.08z" fill={secondaryfill} strokeLinejoin="miter"/>
	</g>
</svg>
	);
};

export default Sign24h;