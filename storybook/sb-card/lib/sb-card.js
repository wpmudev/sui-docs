import React from "react";

// Import required components.
import { Row, Col } from '@wpmudev/sb-grid';
import { Code } from '@wpmudev/sb-code';
import { Button } from "@wpmudev/sb-button";
import { linkTo } from '@storybook/addon-links';

// Import required styles.
import "./styles/sb-card.scss";

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
Card.Color = ({ content, theme, overWhite, ...args }) => {
	let cardClass = 'csb-card csb-card--color';

	const hasTheme = !isUndefined( theme ) ? true : false;
	const isOverWhite = !isUndefined( overWhite ) ? true : false;
	const objContent = Object.assign(
		{
			palette: '',
			shade: '',
			prefix: '',
			hex: '#000000',
			variables: true,
		},
		content
	);

	// Check if `objContent` variables are empty or null.
	const hasPalette = !isUndefined( objContent.palette ) ? true : false;
	const hasShade = !isUndefined( objContent.shade ) ? true : false;
	const hasPrefix = !isUndefined( objContent.prefix ) ? true : false;
	const hasHex = !isUndefined( objContent.hex ) ? true : false;
	const hasVariables = !isUndefined( objContent.variables ) ? true : false;

	// Check if `theme` property exists.
	if ( hasTheme ) {
		switch ( theme ) {
			case 'light':
			case 'dark':
				cardClass += ' csb-card--' + theme;
				break;

			default:
				cardClass += ' csb-card--light';
				break;
		}
	}

	return (
		<div
			className={ cardClass }
			{ ... ( isOverWhite && { style: { background: '#F8F8F8' } } ) }
			{ ...args }>
			<div
				className="csb-card__preview"
				style={{
					background: objContent.hex
				}}>
				{ ( hasShade || hasPrefix ) && (
					<h3>{ hasPrefix ? objContent.prefix : '' }{ ( hasShade && hasPrefix ) ? ' / ' : '' }{ hasShade ? objContent.shade : '' }</h3>
				)}
			</div>

			<div className="csb-card__info">
				{ ( hasPalette && hasShade && hasVariables ) && (
					<Row>
						<Col size="6">
							<h4>SCSS Variable</h4>
							<Code theme="ghost" fullWidth={ true }>
								$color-{ objContent.palette }-{ objContent.shade }
							</Code>
						</Col>
					</Row>
				)}

				{ hasHex && (
					<Row>
						<Col size="3">
							<h4>HEX</h4>
							<Code theme="ghost" fullWidth={ true }>
								{ objContent.hex }
							</Code>
						</Col>
						<Col size="3">
							<h4>HSLA</h4>
							<Code theme="ghost" fullWidth={ true }>
								{ getHsl( objContent.hex ) }, 1
							</Code>
						</Col>
					</Row>
				)}
			</div>
		</div>
	);
}

// Convert HEX to RGB
const getRgb = ( value ) => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( value );
	return result
		? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		}
		: null

	// return color.r + ', ' + color.g + ', ' + color.b;
}

// Convert RGB to HSL
const getHsl = ( value ) => {
	const limitDecimals = ( number ) => {
		return Math.round( number * 100 ) / 100;
	}

	const roundValue = ( number ) => {
		return parseInt( Math.floor( number * 100 ) / 100 );
	}

	// Extract RGB values from HEX.
	let red = getRgb( value ).r;
	let green = getRgb( value ).g;
	let blue = getRgb( value ).b;

	// Convert the RGB values to the range 0-1.
	red /= 255, green /= 255, blue /= 255;
	red = limitDecimals( red ), green = limitDecimals( green ), blue = limitDecimals( blue );

	// Find the minimum and maximum values of R, G and B.
	const min = Math.min( red, green, blue );
	const max = Math.max( red, green, blue );

	// Calculate the luminance value.
	const lum = limitDecimals( ( ( min + max ) / 2 ) * 100 );

	// Calculate the saturation.
	let hue, sat;

	if ( min === max ) {
		// There is no saturation.
		hue = 0;
		sat = 0;
	} else {
		// There is saturation in the color.
		if ( 50 <= limitDecimals( lum ) ) {
			sat = limitDecimals( ( ( max - min ) / ( 2.0 - max - min ) ) * 100 );
		} else {
			sat = limitDecimals( ( ( max - min ) / ( max + min ) ) * 100 );
		}

		switch ( max ) {
			case red:
				hue = ( green - blue ) / ( max - min );
				break;

			case green:
				hue = 2.0 + ( blue - red ) / ( max - min );
				break;

			case blue:
				hue = 4.0 + ( red - green ) / ( max - min );
				break;

			default:
				hue = 0;
				break;
		}

		hue = limitDecimals( hue * 60 );
	}

	return `${ roundValue( hue ) }, ${ roundValue( sat ) }%, ${ roundValue( lum ) }%`;
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
