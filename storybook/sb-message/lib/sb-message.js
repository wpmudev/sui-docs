import React from "react";

// Import required components.
import { Button } from "@wpmudev/sb-button";

// Import required styles.
import "./styles/sb-message.scss";

// Build "message" component.
const Message = ({ action, color, dark, children, ...args }) => {
	const cta = Object.assign(
		{
			label: '',
			icon: '',
			style: '',
			color: '',
			type: '',
			link: '',
			page: '',
		},
		action
	);

	return (
		<div
			className={`csb-message${ !isUndefined( color )
				? ' csb-message--' + color
				: '' }`}
			{ ...args }>
			<div className="csb-message__content">
				{ children }
			</div>
			{ !isUndefined( cta.label ) && (
				<div className="csb-message__action">
					<Button
						label={ cta.label }
						small={ true }
						{ ... ( !isUndefined( cta.style ) && { style: cta.style } ) }
						{ ... ( !isUndefined( cta.color ) && { color: cta.color } ) }
						{ ... ( !isUndefined( cta.link ) && { type: 'link' } ) }
						{ ... ( !isUndefined( cta.link ) && { href: cta.link } ) }
						{ ... ( !isUndefined( cta.link ) && { target: '_blank' } ) }
						{ ... ( !isUndefined( cta.link ) && { rel: 'nofollow' } ) }
					/>
				</div>
			)}
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
export { Message }
