import React from "react";

// Import required styles.
import "./docs-body.scss";

// Build "body" component.
const Body = ({ children, ...args }) => {
	return (
		<div className="csb-body" { ...args }>
			{ children }
		</div>
	);
}

// Publish required component(s).
export { Body }
