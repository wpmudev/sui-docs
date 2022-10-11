import React from "react";

// Build "button" component.
const Button = ({ label, icon, ...args }) => {
	return (
		<button className="csb-button" { ...args }>
			{ !isUndefined( icon ) && (
				<span className="csb-button__icon">
					<span className={`csb-icon csb-icon--${ icon }`} />
				</span>
			)}

			<span className="csb-button__label">{ label }</span>
		</button>
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
export { Button }
