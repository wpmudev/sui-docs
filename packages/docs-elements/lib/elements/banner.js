import React from "react";

import { linkTo } from '@storybook/addon-links';

import '../assets/css/banner.css';

export const Banner = ({ heading, subheading, ctaLabel, ctaLink }) => {
	return (
		<div className="csb-banner csb-banner--gradient">
			<div className="csb-banner__container csb-content">
				<div className="csb-banner__inner-container">
					{ '' !== heading &&
						<h1 className="csb-banner__heading">{ heading }</h1>
					}

					{ '' !== subheading &&
						<p className="csb-banner__subheading">{ subheading }</p>
					}

					{ '' !== ctaLabel && '' !== ctaLink &&
						<button
							className="csb-banner__action"
							onClick={ linkTo( ctaLink ) }
						>
							{ ctaLabel }
						</button>
					}
				</div>
			</div>
		</div>
	);
}