import React from 'react';

import '../assets/css/content.css';

export const Content = ({ title, fullscreen = false, children }) => {
	return (
		<div className={
			`csb-content${ fullscreen ? '' : ' csb-content--contained' }`
		}>
			{ title && '' !== title &&
				<h2 className="csb-page__subtitle">{ title }</h2>
			}

			{ children }
		</div>
	);
}