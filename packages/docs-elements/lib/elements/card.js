import React from "react";
import { linkTo } from '@storybook/addon-links';

import "../assets/css/card.css";

const isUndefined = ( element ) => {

	// Check if element exists.
	if ( element ) {
		// Check if element is not undefined.
		if ( 'undefined' !== typeof element ) {
			// Check if element is not empty.
			if ( '' !== element ) {
				return false;
			}
		}
	}

	return true;
}

export const Card = ({ link, image, svg, title, legend, ...args }) => {
	if ( !isUndefined(image) && !isUndefined(svg) ) {
		throw new Error(
			`\nCard component doesn't support two graphics.\nPlease, choose between "image" and "svg", but not both.`
		);
	}

	return (
		<button
			className="csb-kard csb-kard--button"
			{ ... ( !isUndefined(link) && { onClick: linkTo( link ) } ) }
			{ ...args }>
			{ (!isUndefined(image) || !isUndefined(svg)) && (
				<div className="csb-kard__image">
					{!isUndefined(image) && (
						<img src={image} />
					)}
					{!isUndefined(svg) && svg}
				</div>
			)}

			<div className="csb-kard__info">
				{!isUndefined(title) && <h2>{ title }</h2>}
				{!isUndefined(legend) && <p>{ legend }</p>}
			</div>
		</button>
	);
}