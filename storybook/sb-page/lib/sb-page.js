import React from "react";

// Import required components.
import { Banner } from "@wpmudev/sb-banner";
import { Header } from "@wpmudev/sb-header";
import { Body } from "@wpmudev/sb-body";
import { Tabs } from "@wpmudev/sb-tabs";
import { Section } from "@wpmudev/sb-section";
import { Footer } from "@wpmudev/sb-footer";

// Import required styles.
import "./styles/sb-page.scss";

// Build "page" component.
const Page = {};

Page.Home = ({ title, subtitle, action, image, children, ...args }) => {
	return (
		<div className="csb-page" { ...args }>
			<Banner
				title={ title }
				subtitle={ subtitle }
				action={ action }
				image={ image }
			/>

			<Body>
				<Section container={ true }>
					{ children }
				</Section>
			</Body>

			<SetFooter />
		</div>
	);
}

Page.Simple = ({ title, subtitle, status, children, ...args }) => {
	const hasSubtitle = !isUndefined(subtitle) ? true : false;

	return (
		<div className="csb-page" { ...args }>
			<Header title={ title } border={ true } status={ status } />

			<Body>
				{ hasSubtitle && (
					<Section contained={ true }>
						<p className="csb-page__title">{ subtitle }</p>
					</Section>
				)}

				{ children }
			</Body>

			<SetFooter />
		</div>
	);
}

Page.Tabs = ({ title, subtitle, status, children, ...args }) => {
	return (
		<div className="csb-page" { ...args }>
			<Header title={ title } border={ false } status={ status } />

			<Body>
				<Tabs { ... ( !isUndefined( subtitle ) && { title: subtitle } ) }>
					{ children }
				</Tabs>
			</Body>

			<SetFooter />
		</div>
	);
}

Page.Canvas = ({ children, ...args }) => {
	return (
		<div
			className="csb-page"
			style={{ background: 'transparent' }}
			{ ...args }>
			<Body>
				{ children }
			</Body>
		</div>
	);
}

// Build global footer.
const SetFooter = () => {
	return (
		<Footer>
			<div label="Terms of Use" kind="sui-terms--page" />
			<div label="Privacy Policy" link="https://incsub.com/privacy-policy/" />
		</Footer>
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
export { Page }
