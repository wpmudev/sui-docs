import React from "react";

// Build "message" component.
const Message = ({ status, children, ...args }) => {
	let color;

	switch ( status ) {
		case 'success':
			color = ' csb-message--green';
			break;

		case 'warning':
			color = ' csb-message--yellow';
			break;

		case 'error':
			color = ' csb-message--red';
			break;

		default:
			// Do nothing.
			break;
	}

	return (
		<div className={`csb-message${ color }`} { ...args }>
			{ children }
		</div>
	);
}

// Publish required component(s).
export { Message }
