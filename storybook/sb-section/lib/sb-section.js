import React from "react";

// Import required components.
import { Tag } from "@wpmudev/sb-tag";

// Import required styles.
import "./styles/sb-section.scss";

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

	let getTitle = (
		<h2 className="csb-section__title">{ title }</h2>
	);

	if ( hasTitle ) {
		if ( 'object' === typeof title ) {
			if ( Array.isArray( title ) ) {
				throw new Error(
					`\nOnly object and string is allowed in title property.`
				);
			} else {
				const objTitle = Object.assign(
					{
						content: '',
						date: '',
						tag: '',
						small: false,
					},
					title
				);

				getTitle = (
					<h2 className={`csb-section__title${ true === objTitle.small ? ' csb-section__title--sm' : '' }${ ( !isUndefined( objTitle.date ) || !isUndefined( objTitle.tag ) ) ? ' csb-section__title-tag' : '' }`}>
						{ objTitle.content }
						{ !isUndefined( objTitle.date ) && <Tag color="blue">{ objTitle.date }</Tag> }
						{ !isUndefined( objTitle.tag ) && (
							<Tag color="yellow">{ objTitle.tag }</Tag>
						)}
					</h2>
				);
			}
		}
	}

	if ( hasContainer ) {
		return (
			<div className={ sectionClass } { ...args }>
				<div className="csb-section__inner">
					{ isContained && (
						<div className="csb-section__contained">
							{ hasTitle && getTitle }
							{ children }
						</div>
					)}

					{ !isContained && (
						<>
							{ hasTitle && getTitle }
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
					{ hasTitle && getTitle }
					{ children }
				</div>
			)}

			{ !isContained && (
				<>
					{ hasTitle && getTitle }
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
