import React from "react";

// Import required components.
import { Banner } from "@wpmudev/docs-banner";
import { Header } from "@wpmudev/docs-header";
import { Body } from "@wpmudev/docs-body";
import { Tabs } from "@wpmudev/docs-tabs";
import { Section } from "@wpmudev/docs-section";
import { Footer } from "@wpmudev/docs-footer";

// Import required styles.
import "./docs-page.scss";

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

Page.Tabs = ({ title, status, ...args }) => {
	return (
		<div className="csb-page" { ...args }>
			<Header title={ title } border={ false } status={ status } />

			<Tabs { ... ( !isUndefined( subtitle ) && { title: subtitle } ) }>
				{ children }
			</Tabs>

			<SetFooter />
		</div>
	);
}

// Build global footer.
const SetFooter = () => {
	return (
		<Footer>
			<div label="Terms" kind="sui-terms--page" />
			<div label="Privacy" />
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
