import React from "react";

// Import required components.
import { Tag } from "@wpmudev/docs-tag";

// Import required styles.
import "./docs-header.scss";

// Build "header" component.
const Header = ({ title, border, status, ...args }) => {
	const hasTitle = !isUndefined(title) ? true : false;
	const hasStatus = !isUndefined(status) ? true : false;

	if ( !hasTitle ) {
		throw new Error(
			`\nTitle is required for Header component.`
		);
	}

	let headerClass = 'csb-header';

	if ( true === border ) {
		headerClass += ' csb-header--border';
	}

	let statusName, statusDesc, statusColor;

	switch ( status ) {
		case 'planned':
			statusName = 'Planned';
			statusDesc = 'Planned, not ready for use';
			statusColor = '';
			break;

		case 'draft':
			statusName = 'Draft';
			statusDesc = 'Draft, still in development mode';
			statusColor = 'yellow';
			break;

		case 'ready':
			statusName = 'Ready';
			statusDesc = 'Ready, can be used in production'
			statusColor = 'blue';
			break;

		case 'dead':
			statusName = 'Deprecated';
			statusDesc = 'Deprecated, soon to be removed';
			statusColor = 'red';
			break;

		default:
			statusName = false;
			statusColor = '';
			break;
	}

	if ( hasStatus && statusName ) {
		headerClass += ' csb-header--status';
	}

	return (
		<div className={ headerClass } { ...args }>
			<h1 className="csb-header__title">
				{ title }

				{( hasStatus && statusName ) && (
					<Tag
						id={ `page-status--${ status }` }
						color={ statusColor }
						light={ true }
						uppercase={ true }
						tooltip={ statusDesc }>
						{ statusName }
					</Tag>
				)}
			</h1>
		</div>
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
export { Header }
