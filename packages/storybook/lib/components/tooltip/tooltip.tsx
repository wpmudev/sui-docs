import React from "react";

// Import required styles.
import "./tooltip.scss";

// Build "tooltip" component.
const Tooltip = ({ id, description, active = false, children, ...args }) => {
	if ( isUndefined( id ) ) {
		throw new Error(
			`\nEvery tooltip requires a unique ID.`
		);
	}

	return (
		<div
			className={ `csb-tooltip${ active ? ' csb-tooltip--active' : '' }` }
			{ ...args }>
			{ children }

			<div role="tooltip" id={ id } className="csb-tooltip__message">
				{ active && (
					<>{ description }</>
				)}
			</div>
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
export default Tooltip;
