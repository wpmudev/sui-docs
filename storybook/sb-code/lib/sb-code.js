import React from "react";

// Import required styles.
import "./styles/sb-code.scss";

// Build "code" component.
const Code = ({ small, theme, fullWidth, children, ...args }) => {
	const hasSmall = !isUndefined( small ) ? true : false;
	const isfullWidth = !isUndefined( fullWidth ) ? true : false;

	let codeClass = '';

	if ( hasSmall && true === small ) {
		codeClass += ' csb-code--sm';
	}

	switch ( theme ) {
		case 'dark':
		case 'ghost':
			codeClass += ' csb-code--theme-' + theme;
			break;

		default:
			codeClass += ' csb-code--theme-light';
			break;
	}

	if ( isfullWidth && true === fullWidth ) {
		codeClass += ' csb-code--block';
	}

	return (
		<code
			className={`csb-code${ !isUndefined( codeClass ) ? codeClass : '' }`}
			{ ...args }>
			{ children }
		</code>
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
export { Code }
