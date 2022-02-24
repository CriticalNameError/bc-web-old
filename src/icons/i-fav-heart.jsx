import React from 'react';

function IFavHeart(props) {
	const title = props.title || "i fav heart";

	return (
		<svg height="32" width="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g strokeMiterlimit="10">
		<g className="nc-interact_fav-heart-c-32">
			<path className="nc-line" d="M16 1v8" fill="none" opacity="0" stroke="#E86C60" strokeDasharray="8.1 8.1" strokeLinecap="round" strokeWidth="2"/>
			<path className="nc-line" d="M26.607 5.393L20.95 11.05" fill="none" opacity="0" stroke="#E86C60" strokeDasharray="8.1 8.1" strokeLinecap="round" strokeWidth="2"/>
			<path className="nc-line" d="M31 16h-8" fill="none" opacity="0" stroke="#E86C60" strokeDasharray="8.1 8.1" strokeLinecap="round" strokeWidth="2"/>
			<path className="nc-line" d="M26.607 26.607L20.95 20.95" fill="none" opacity="0" stroke="#E86C60" strokeDasharray="8.1 8.1" strokeLinecap="round" strokeWidth="2"/>
			<path className="nc-line" d="M16 31v-8" fill="none" opacity="0" stroke="#E86C60" strokeDasharray="8.1 8.1" strokeLinecap="round" strokeWidth="2"/>
			<path className="nc-line" d="M5.393 26.607l5.657-5.657" fill="none" opacity="0" stroke="#E86C60" strokeDasharray="8.1 8.1" strokeLinecap="round" strokeWidth="2"/>
			<path className="nc-line" d="M1 16h8" fill="none" opacity="0" stroke="#E86C60" strokeDasharray="8.1 8.1" strokeLinecap="round" strokeWidth="2"/>
			<path className="nc-line" d="M5.393 5.393l5.657 5.657" fill="none" opacity="0" stroke="#E86C60" strokeDasharray="8.1 8.1" strokeLinecap="round" strokeWidth="2"/>
			<path className="nc-inactive" d="M26.815 6.918C23.819 3.922 18.883 4.009 16 7.196c-2.884-3.189-7.82-3.273-10.815-.278A7.41 7.41 0 0 0 3 12.193c0 1.993.776 3.867 2.185 5.275L16 28.283l10.815-10.816C28.224 16.059 29 14.186 29 12.193s-.776-3.866-2.185-5.275z" fill="#D3D3D3" transform="scale(1)"/>
			<path className="nc-active" d="M26.815 6.918C23.819 3.922 18.883 4.009 16 7.196c-2.884-3.189-7.82-3.273-10.815-.278A7.41 7.41 0 0 0 3 12.193c0 1.993.776 3.867 2.185 5.275L16 28.283l10.815-10.816C28.224 16.059 29 14.186 29 12.193s-.776-3.866-2.185-5.275z" fill="#E86C60" transform="translate(16 16) scale(0)"/>
		</g>
	</g>
</svg>
	);
};

export default IFavHeart;