import React from "react";

// Import required styles.
import "./docs-code.scss";

// Build "code" component.
const Code = ({ small, dark, children, ...args }) => {
	const hasSmall = !isUndefined( small ) ? true : false;
	const hasDark = !isUndefined( dark ) ? true : false;

	let codeClass = '';

	if ( hasSmall && true === small ) {
		codeClass += ' csb-code--sm';
	}

	if ( hasDark && true === dark ) {
		codeClass += ' csb-code--dark';
	}

	return (
		<span
			role="code"
			className={`csb-code${ !isUndefined( codeClass ) ? codeClass : '' }`}
			{ ...args }>
			{ children }
		</span>
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
