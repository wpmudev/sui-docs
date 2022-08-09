import React from "react";

import '../assets/css/section.css';

export const Section = ({ title, nested, children }) => {
	let titleMarkup = (
		<h3 className="csb-section__title">{ title }</h3>
	);

	if ( nested && nested === true ) {
		titleMarkup = (
			<h4 className="csb-nested-section__title">{ title }</h4>
		);
	}

	return (
		<div className={ nested && nested === true ? 'csb-nested-section' : 'csb-section' }>
			{ title && '' !== title && (
				<>{ titleMarkup }</>
			)}

			{ children }
		</div>
	);
}
