import React from "react";

// Import required styles.
import "./docs-section.scss";

// Build "section" component.
const Section = ({ title, border, container, contained, children, ...args }) => {
	const hasTitle = !isUndefined( title ) ? true : false;
	const hasBorder = !isUndefined( border ) ? border : false;
	const hasContainer = !isUndefined( container ) ? container : false;
	const isContained = !isUndefined( contained ) ? contained : false;

	let sectionClass = 'csb-section';

	if ( hasBorder ) {
		sectionClass += ' csb-section--border';
	}

	if ( hasContainer ) {
		return (
			<div className={ sectionClass } { ...args }>
				<div className="csb-section__inner">
					{ isContained && (
						<div className="csb-section__contained">
							{ hasTitle && <h2 className="csb-section__title">{ title }</h2> }
							{ children }
						</div>
					)}

					{ !isContained && (
						<>
							{ hasTitle && <h2 className="csb-section__title">{ title }</h2> }
							{ children }
						</>
					)}
				</div>
			</div>
		);
	}

	return (
		<div className={ sectionClass } { ...args }>
			{ isContained && (
				<div className="csb-section__contained">
					{ hasTitle && <h2 className="csb-section__title">{ title }</h2> }
					{ children }
				</div>
			)}

			{ !isContained && (
				<>
					{ hasTitle && <h2 className="csb-section__title">{ title }</h2> }
					{ children }
				</>
			)}
		</div>
	);
};

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
export { Section }
