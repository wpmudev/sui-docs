import React, { Children } from "react";

// Import required styles.
import "./styles/sb-list.scss";

// Build "list" component.
const List = ({ id, title, children, ...args }) => {
	const hasId = !isUndefined(id) ? true : false;
	const hasTitle = !isUndefined(title) ? true : false;

	if ( hasTitle && !hasId ) {
		throw new Error(
			`\nLists with title require a unique ID for accessibility purposes.`
		);
	}

	const items = Children.map( children, ( item, index ) => {
		const subitems = Children.map( item.props.children, ( subitem, subindex ) => {
			return (
				<li key={ index + '-' + subindex }>
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
		<>
			{ hasTitle && (
				<h3 id={ id } className="csb-list__title">{ title }</h3>
			)}

			<ul
				className="csb-list"
				{ ... ( hasTitle && { 'aria-labelledby': id } ) }
				{ ...args }>
				{ items }
			</ul>
		</>
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
