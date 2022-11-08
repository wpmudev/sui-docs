import React, { Children } from "react";

// Import required styles.
import "./styles/sb-select.scss";

// Build "select" component.
const Select = ({ children, ...args }) => {
	const options = Children.map( children, ( item, index ) => {
		return (
			<option key={ index } value={ item.props.value }>
				{ item.props.label }
			</option>
		);
	});

	return (
		<select className="csb-select" { ...args }>
			{ options }
		</select>
	);
};

// Publish required component(s).
export { Select }
