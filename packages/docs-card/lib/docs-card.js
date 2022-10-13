import React from "react";
import { Button } from "@wpmudev/docs-button";
import { linkTo } from '@storybook/addon-links';

// Import required styles.
import "./docs-card.scss";

// Build "card" component.
const Card = {};

// Create simple card.
Card.Simple = ({ title, description, image, action, theme, ...args }) => {
	let themeClass;

	switch ( theme ) {
		case 'light':
		case 'dark':
			themeClass = ' csb-card--' + theme;
			break;

		default:
			// Do nothing.
			break;
	}

	const fig = Object.assign(
		{
			alt: 'Shared UI Developers Showcase',
			src: '',
			src2x: '',
			width: '',
			height: '',
		},
		image
	);

	return (
		<div
			className={`csb-card csb-card--center${ !isUndefined( themeClass )
				? themeClass
				: ''
			}`}
			{ ...args }>
			{ !isUndefined( fig.src ) && (
				<div className="csb-card__image" aria-hidden="true">
					<img
						alt={ fig.alt }
						src={ fig.src }
						{ ... ( !isUndefined( fig.src2x ) && { srcSet: `${ fig.src } 1x, ${ fig.src2x } 2x` } ) }
						{ ... ( !isUndefined( fig.width ) && { width: `${ fig.width }` } ) }
						{ ... ( !isUndefined( fig.height ) && { height: `${ fig.height }` } ) }
					/>
				</div>
			)}

			<div className="csb-card__info">
				{ !isUndefined(title) && <h3 className="csb-card__title">{ title }</h3> }
				{ !isUndefined(description) && <p className="csb-card__description">{ description }</p> }
				{ !isUndefined( action ) && (
					<Button
						label="Learn More"
						style="secondary"
						{ ... ( 'light' === theme && { color: 'black' } ) }
						{ ... ( 'dark' === theme && { color: 'white' } ) }
						className="csb-banner__cta"
						onClick={ linkTo( action ) }
					/>
				)}
			</div>
		</div>
	);
}

// Create color's card.
Card.Color = ({ title, variable, hex, hsl, ...args }) => {
	return (
		<div className="csb-card csb-card--color" { ...args }>
			<div className="csb-card__preview">
				{ !isUndefined( title ) && <h3>{ title }</h3> }
			</div>

			<div className="csb-card__info">
				{ !isUndefined(variable) && (
					<div className="csb-card__row">
						<div className="csb-card__col">
							<h3>SCSS Variable</h3>
							<p>{ variable }</p>
						</div>
					</div>
				)}

				{ !isUndefined(hex) || !isUndefined(hsl) && (
					<div className="csb-card__row">
						{ !isUndefined(hex) && (
							<div className="csb-card__col">
								<h4>HEX</h4>
								<p>{ hex }</p>
							</div>
						)}
						{ !isUndefined(hsl) && (
							<div className="csb-card__col">
								<h4>HSL</h4>
								<p>{ hsl }</p>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

// Check if element is undefined.
const isUndefined = (element, isNumber = false) => {
	const isValid = 'undefined' !== typeof element;
	const isNotEmpty = '' !== element;

	if ( element && isValid && isNotEmpty ) {
		if ( isNumber ) {
			if ( Number.isNaN(element) ) {
				return false;
			}
		} else {
			return false;
		}
	}

	return true;
}

// Publish required component(s).
export { Card }
