import React from "react";

// Import required components.
import { Source } from '@storybook/addon-docs';

// Import required styles.
import "./docs-snippet.scss";

// Build "snippet" component.
const Snippet = ({ language, dark, children }) => {
	const hasDark = !isUndefined( dark ) ? true : false;
	const isDark = hasDark && true === dark;

	return (
		<div className={`csb-snippet${ isDark ? ' csb-snippet--dark' : '' }`}>
			<Source
				code={ children }
				{ ... ( !isUndefined( language ) && { language: language } ) } />
		</div>
	);
}

// Check if element is undefined.
const isUndefined = ( element, isNumber = false ) => {
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
export { Snippet }
