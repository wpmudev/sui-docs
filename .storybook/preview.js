import React from 'react';

import './assets/js/body-class';
import './assets/js/html-class';

import './assets/css/wordpress.css';

/**
 * Get devices samples from:
 * https://screensiz.es/
 */
const breakpoints = {
	xl: {
		name: 'Dell UltraSharp 24"',
		styles: {
			width: '1920px', // Min 1600px
			height: '1200px',
		},
		type: 'extra-large',
	},
	lg: {
		name: 'MacBook Air 13"',
		styles: {
			width: '1440px', // Min 1200px - Max 1599px
			height: '900px',
		},
		type: 'large',
	},
	md: {
		name: 'iPad Pro 12.9-in',
		styles: {
			width: '1024px', // Min 1024px - Max 1199px
			height: '1366px',
		},
		type: 'medium',
	},
	sm: {
		name: 'iPad Pro 10.5-in',
		styles: {
			width: '834px', // Min 783px - Max 1023px
			height: '1112px',
		},
		type: 'small',
	},
	xs: {
		name: 'iPhone 12',
		styles: {
			width: '390px', // Min 0 - Max 782px
			height: '844px',
		},
		type: 'extra-small',
	},
};

export const parameters = {
	actions: {
		argTypesRegex: "^on[A-Z].*"
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	viewport: {
		viewports: breakpoints
	},
	backgrounds: {
		disable: true
	},
	options: {
		storySort: {
			order: [
				'SUI',
				[
					'Home',
					'Getting Started',
					"What's New",
					['Changelog', 'Roadmap'],
					'CSS Framework',
					[
						'Layout',
						['Overview', 'Container', 'Grid']
					],
					// 'Utilities',
					// ['Intro', 'Colors', 'Typography'],
					// 'Components',
					'*'
				]
			]
		}
	}
}

const WordPress = ({ children }) => {
	return (
		<div id="wpadmin">
			<div id="adminmenumain" role="navigation" aria-label="Main Menu">
				<div id="adminmenuback"></div>

				<div id="adminmenuwrap">
					<ul id="adminmenu">
						<li className="wp-not-current-submenu wp-menu-separator" aria-hidden="true">
							<div className="separator"></div>
						</li>

						<li id="collapse-menu" className="hide-if-no-js">
							<button type="button" id="collapse-button" aria-label="Collapse Main menu" aria-expanded="true">
								<span className="collapse-button-icon" aria-hidden="true"></span>
								<span className="collapse-button-label">Collapse menu</span>
							</button>
						</li>
					</ul>
				</div>
			</div>

			<div id="wpcontent">
				<div id="wpadminbar" className="nojq">
					<div role="navigation" id="wp-toolbar" className="quicklinks" aria-label="Toolbar">
						<ul id="wp-admin-bar-root-default" className="ab-top-menu">
							<li id="wp-admin-bar-menu-toggle">
								<a className="ab-item" href="#" aria-expanded="false">
									<span className="ab-icon"></span>
									<span className="screen-reader-text">Menu</span>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div id="wpbody" role="main">
					<div id="wpbody-content">
						{ children }
					</div>

					<div className="clear"></div>
				</div>

				<div className="clear"></div>
			</div>
		</div>
	);
};

export const decorators = [
	( Story ) => (
		<WordPress>
			<Story />
		</WordPress>
	)
];