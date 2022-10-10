import React from "react";

// Import documentation components.
import { Header } from "@wpmudev/docs-header";
import { Tabs } from "@wpmudev/docs-tabs";
import { Footer } from "@wpmudev/docs-footer";

// Build "page" component.
const Page = {};

Page.Simple = ({ title, subtitle, status, children, ...args }) => {
	const hasSubtitle = !isUndefined(subtitle) ? true : false;

	return (
		<div className="csb-page" { ...args }>
			<Header title={ title } border={ true } status={ status } />

			<div className="csb-page__content">
				{ hasSubtitle && (
					<div className="csb-page__container">
						<h2 className="csb-subtitle">{ subtitle }</h2>
					</div>
				)}

				{ children }
			</div>

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
			<div label="Terms" />
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