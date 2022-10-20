import React, { useState } from "react";

// Import required components.
import { Tooltip } from "@wpmudev/docs-tooltip";

// Import required styles.
import "./docs-tag.scss";

// Build "tag" component.
const Tag = ({ id, color, light, uppercase, tooltip, children, ...args }) => {
	const [ isHovering, setIsHovering ] = useState( false );

	const handleMouseOver = () => {
		setIsHovering( true );
	}

	const handleMouseOut = () => {
		setIsHovering( false );
	}

	// Set component class.
	let tagClass = 'csb-tag';

	switch (color) {
		case 'blue':
		case 'yellow':
		case 'green':
		case 'red':
			tagClass += ' csb-tag--' + color;
			break;

		default:
			tagClass += '';
			break;
	}

	if ( true === light ) {
		tagClass += ' csb-tag--light';
	}

	if ( true === uppercase ) {
		tagClass += ' csb-tag--uppercase';
	}

	// Return markup with tooltip.
	if ( !isUndefined( tooltip ) ) {
		return (
			<Tooltip id={ id } description={ tooltip } active={ isHovering ? true : false }>
				<span
					className={ tagClass }
					aria-describedby={ id }
					onMouseOver={ handleMouseOver }
					onMouseOut={ handleMouseOut }
					{ ...args }>
					{ children }
				</span>
			</Tooltip>
		);
	}

	// Return simple markup.
	return (
		<span className={ tagClass } { ...args }>
			{ children }
		</span>
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
export { Tag }
