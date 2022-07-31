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
}