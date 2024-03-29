import React from "react";

// Import required dependencies.
import { Button } from '@wpmudev/sb-button';
import { linkTo } from '@storybook/addon-links';

// Import required styles.
import "./styles/sb-banner.scss";

// Build "header" component.
const Banner = ({ title, subtitle, action, image }) => {
	const cta = Object.assign(
		{
			link: '',
			label: '',
		},
		action
	);

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
		<div className="csb-banner">
			<div className="csb-banner__content">
				{ !isUndefined( title ) && (
					<h1 className="csb-banner__title">{ title }</h1>
				)}

				{ !isUndefined( subtitle ) && (
					<p className="csb-banner__subtitle">{ subtitle }</p>
				)}

				{( !isUndefined( cta.link ) && !isUndefined( cta.label ) ) && (
					<Button
						label={ cta.label }
						style="primary"
						className="csb-banner__cta"
						onClick={ linkTo( cta.link ) }
					/>
				)}
			</div>

			{ !isUndefined( fig.src ) && (
				<div tabIndex="-1" className="csb-banner__image" aria-hidden="true">
					<img
						alt={ fig.alt }
						src={ fig.src }
						{ ... ( !isUndefined( fig.src2x ) && { srcSet: `${ fig.src } 1x, ${ fig.src2x } 2x` } ) }
						{ ... ( !isUndefined( fig.width ) && { width: `${ fig.width }` } ) }
						{ ... ( !isUndefined( fig.height ) && { height: `${ fig.height }` } ) } />
				</div>
			)}
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
export { Banner }
