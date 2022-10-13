import React, { Children } from "react";
import LinkTo from '@storybook/addon-links/react';

// Import required styles.
import "./docs-footer.scss";

// Import WPMU DEV logo.
import Logo from "./images/wpmudev-logo.svg";

// Build "footer" component.
const Footer = ({ children, ...args }) => {
	const menuItems = Children.map( children, ( child, index ) => {
		return (
			<li key={ index } className="csb-footer__menu-item">
				{( isUndefined( child.props.link ) && isUndefined( child.props.kind ) ) && (
					<>{ child.props.label }</>
				)}

				{( !isUndefined( child.props.link ) || !isUndefined( child.props.kind ) ) && (
					<>
						{ !isUndefined( child.props.link ) && (
							<a href={ child.props.link } target="_blank">
								{ child.props.label }
							</a>
						)}

						{ !isUndefined( child.props.kind ) && (
							<LinkTo kind={ child.props.kind } story={ child.props.story }>
								{ child.props.label }
							</LinkTo>
						)}
					</>
				)}
			</li>
		);
	});

	return (
		<div className="csb-footer" { ...args }>
			<div className="csb-footer__brand">
				<img src={ Logo } alt="WPMU DEV Logo" aria-hidden="true" /> Powered by WPMU DEV
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