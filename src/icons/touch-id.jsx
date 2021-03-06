import React from 'react';

function TouchId(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M5.72795,11.76359 c-3.1499,4.69958-4.49646,10.60587-3.2898,16.59028" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M34.00243,4.42544 c-4.27124-2.18654-9.28467-2.99667-14.35418-1.97451c-4.18231,0.8433-7.84624,2.82139-10.73582,5.54904" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M45.55015,19.6608 c-1.03782-5.14703-3.79424-9.50888-7.55126-12.60853" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M45.99599,24.44981 c0.03017-1.57674-0.10945-3.18122-0.43396-4.79126" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M2.45003,28.35163 c0.06372,0.31568,0.13384,0.62847,0.21039,0.93822" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M18.31716,45.25455 c4.92638-5.60718,7.27194-13.36749,5.68292-21.24833" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M24.69677,45.98719 c4.45133-6.50496,6.46989-15.82052,4.69272-23.0675c-0.80616-3.33636-3.50092-4.91619-6.4841-4.3146 c-2.98303,0.60152-4.89669,3.36793-4.2947,6.48764c1.32681,6.87602-1.01895,13.47343-5.7343,17.88512" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M13.46476,28.00002 c0.30142,4.52019-1.65672,8.79661-5.02317,11.5541" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M35.36987,26.00045 c-0.11412-1.3829-0.30985-2.77382-0.59082-4.16735l0.00161-0.0012c-1.20127-5.95737-7.00377-9.81266-12.96083-8.61155 c-4.87039,0.98209-8.33591,5.03962-8.782,9.74291" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M31.88382,44.5346 c2.03394-4.17505,3.26856-8.76473,3.54676-13.53457" fill="none" stroke={fill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M18.95957,8.29581 C11.05254,10.81912,6.14465,18.94274,7.82322,27.26783l0.0085-0.002c0.61644,3.0579-0.54165,6.06106-2.76458,7.94464" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M39.60418,39.49731 c1.5829-5.93731,1.86103-12.31967,0.56428-18.75072l-0.00306-0.00024c-1.57981-7.83528-8.46858-13.24509-16.16554-13.23937" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default TouchId;