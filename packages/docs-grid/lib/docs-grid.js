import React from "react";

// Import required styles.
import "./docs-grid.scss";

// Build "row" component.
const Row = ({ gutter, children, ...args }) => {
	let spacing;

	switch ( gutter ) {
		case 'sm':
		case 'lg':
			spacing = ' csb-row--' + gutter;
			break;

		default:
			// Do nothing.
			break;
	}

	return (
		<div className={`csb-row${ !isUndefined( spacing ) ? spacing : '' }`} { ...args }>
			{ children }
		</div>
	);
}

// Build "col" component.
const Col = ({ size, children, ...args }) => {
	let sizeClass = '';

	if ( !isUndefined( size ) ) {
		sizeClass = ' csb-col--' + size;
	}

	return (
		<div className={`csb-col${ sizeClass }`} { ...args }>
			{ children }
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
export { Row, Col }
