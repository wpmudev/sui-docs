import React, { Children } from "react";

// Import required styles.
import "./docs-list.scss";

// Build "list" component.
const List = ({ children, ...args }) => {
	const items = Children.map( children, ( item, index ) => {
		const subitems = Children.map( item.props.children, ( subitem, index ) => {
			return (
				<li key={ index }>
					{ subitem.props.label }
				</li>
			);
		});

		return (
			<li key={ index }>
				{ item.props.label }
				{ !isUndefined( item.props.children ) && (
					<ul className="csb-sublist">
						{ subitems }
					</ul>
				)}
			</li>
		);
	});

	return (
		<ul className="csb-list" { ...args }>
			{ items }
		</ul>
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
export { List }
