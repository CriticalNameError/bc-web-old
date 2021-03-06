import React from 'react';

function Stripe1(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeMiterlimit="10">
		<path d="M2 50V14a4.012 4.012 0 014-4h52a4.012 4.012 0 014 4v36a4.012 4.012 0 01-4 4H6a4.012 4.012 0 01-4-4z" fill="none" stroke={fill} strokeLinecap="square" strokeLinejoin="miter" strokeWidth={strokewidth}/>
		<path d="M53.25 32.3c0-3.022-1.464-5.407-4.262-5.407s-4.51 2.385-4.51 5.384c0 3.553 2.007 5.347 4.888 5.347a6.578 6.578 0 003.27-.767v-2.366a6.275 6.275 0 01-2.892.649c-1.145 0-2.161-.4-2.291-1.794h5.773c0-.154.024-.768.024-1.046zm-5.832-1.121c0-1.334.815-1.889 1.558-1.889.721 0 1.488.555 1.488 1.889zM39.922 26.888a3.334 3.334 0 00-2.314.921l-.154-.732h-2.6v13.765l2.951-.625.012-3.341a3.326 3.326 0 002.09.743c2.113 0 4.037-1.7 4.037-5.442-.009-3.424-1.956-5.289-4.022-5.289zm-.709 8.134a1.765 1.765 0 01-1.393-.555l-.012-4.379a1.756 1.756 0 011.405-.579c1.075 0 1.818 1.2 1.818 2.751 0 1.582-.731 2.762-1.818 2.762zM30.796 26.192l2.963-.638v-2.396l-2.963.625v2.409z" fill={secondaryfill} fillRule="evenodd"/>
		<path d="M30.796 27.089h2.963v10.33h-2.963z" fill={secondaryfill}/>
		<path d="M27.62 27.962l-.189-.873h-2.55v10.33h2.952v-7a2.082 2.082 0 012.243-.614v-2.716a2 2 0 00-2.456.873zM21.717 24.527l-2.88.614-.012 9.459a2.966 2.966 0 003.058 3.034 4.57 4.57 0 002.066-.389v-2.4c-.378.154-2.243.7-2.243-1.051V29.6h2.243v-2.511h-2.243zM13.737 30.087c0-.46.378-.637 1-.637a6.583 6.583 0 012.928.756v-2.775a7.8 7.8 0 00-2.928-.543c-2.4 0-3.99 1.252-3.99 3.341 0 3.258 4.486 2.739 4.486 4.144 0 .543-.472.72-1.133.72a7.349 7.349 0 01-3.223-.944v2.809a8.172 8.172 0 003.223.673c2.455 0 4.144-1.216 4.144-3.329-.009-3.518-4.507-2.892-4.507-4.215z" fill={secondaryfill} fillRule="evenodd"/>
	</g>
</svg>
	);
};

export default Stripe1;