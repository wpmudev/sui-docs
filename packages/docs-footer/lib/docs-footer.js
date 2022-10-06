import React, { Children } from "react";

// Build "footer" component.
const Footer = ({ children, ...args }) => {
	const menuItems = Children.map( children, ( child, index ) => {
		return (
			<li key={ index } className="csb-footer__menu-item">
				{ isUndefined( child.props.link ) && child.props.label }

				{ !isUndefined( child.props.link ) && (
					<a href={ child.props.link } target="_blank">
						{ child.props.label }
					</a>
				)}
			</li>
		);
	});

	return (
		<div className="csb-footer" { ...args }>
			<div className="csb-footer__brand">
				<p>Powered by WPMU DEV</p>
			</div>

			{ !isUndefined( children ) && (
				<div className="csb-footer__menu">
					<ul className="csb-footer__menu-list">
						{ menuItems }
					</ul>
				</div>
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
export { Footer }