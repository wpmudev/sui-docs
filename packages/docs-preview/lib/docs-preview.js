import React, { useEffect } from 'react';
import { Canvas } from '@storybook/addon-docs';

// Import required styles.
import "./docs-preview.scss";

// Build "preview" component.
const Preview = ({ wrapper, children }) => {
	useEffect( () => {
		/**
		 * Canvas/Preview blocks have a fixed height in Firefox
		 * Ticket #13814
		 *
		 * @link https://github.com/storybookjs/storybook/issues/13814
		 */
		 const containerElement = document.getElementsByClassName(
			'innerZoomElementWrapper'
			)[0]?.parentNode;
		const firstElement = document.getElementsByClassName('innerZoomElementWrapper')[0]?.firstChild;
		const lastElement = document.getElementsByClassName('innerZoomElementWrapper')[0]?.lastChild;

		if ( containerElement instanceof HTMLDivElement ) {
			containerElement.style.height = 'unset';
		}

		if ( firstElement instanceof HTMLDivElement ) {
			if ( !firstElement.classList.contains('sui-wrap') ) {
				firstElement.style.width = 'unset';
				firstElement.style.maxWidth = 'unset';
				firstElement.style.display = 'block';
				firstElement.style.setProperty( 'border', '0', 'important' );
			}
		}

		if ( lastElement instanceof HTMLDivElement ) {
			if ( lastElement.innerHTML === '' ) {
				lastElement.remove();
			}
		}
	}, []);

	return (
		<Canvas className="csb-preview">
			<div className="sui-wrap sui-theme--light">
				{ true === wrapper && (
					<div className="sui-layout sui-layout--spacing">
							{ children }
					</div>
				)}
				{ true !== wrapper && children }
			</div>
		</Canvas>
	);
}

// Publish required component(s).
export { Preview }
