import React from "react";

import '../assets/css/section.css';

export const Section = ({ title, children }) => {
	return (
		<div className="csb-section">
			{ title && '' !== title &&
				<h3 className="csb-section__title">{ title }</h3>
			}

			{ children }
		</div>
	);
}
