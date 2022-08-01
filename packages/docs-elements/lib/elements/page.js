import React from "react";

import '../assets/css/page.css';

export const Page = ({ title, light = false, children }) => {
	return (
		<div className={ `csb-page${ light ? ' csb-page--white' : '' }` }>
			{ '' !== title &&
				<div className="csb-heading">
					<div className="csb-content">
						<h1 className="csb-page__title">{ title }</h1>
					</div>
				</div>
			}

			{ children }
		</div>
	);
}
