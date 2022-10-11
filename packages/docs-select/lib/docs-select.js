import React, { Children } from "react";

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
