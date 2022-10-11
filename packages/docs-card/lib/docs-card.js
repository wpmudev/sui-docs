import React from "react";

// Build "card" component.
const Card = {};

// Create simple card.
Card.Simple = ({ title, description, image, ...args }) => {
	return (
		<div className="csb-card" { ...args }>
			<div className="csb-card__image"></div>
			<div className="csb-card__info">
				{ !isUndefined(title) && <h3>{ title }</h3> }
				{ !isUndefined(description) && <p>{ description }</p> }
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
							<h4>SCSS Variable</h4>
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
