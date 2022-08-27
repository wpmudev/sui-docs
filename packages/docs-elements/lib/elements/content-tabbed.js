import React from "react";
import {Page} from "./page";
import {Tabs} from "./tabs";
import {Footer} from './footer';

export const TabbedContent = ({theme, title, subtitle, status, children}) => {
	return (
		<Page title={title} status={status} flushed>
			<Tabs title={subtitle}>
				{children}
			</Tabs>
			<Footer />
		</Page>
	);
}