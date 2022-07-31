import React from 'react';

import '../assets/css/content.css';

export const Content = ({ fullscreen = false, children }) => {
	return (
		<div className={
			`csb-content${ fullscreen ? ' csb-content--contained' : '' }`
		}>
			{ children }
		</div>
	);
}