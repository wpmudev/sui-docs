import React, { useState } from "react";
import { Content } from "./content";

import "../assets/css/tabs.css";

export const Tabs = ({title, children, ...args}) => {
	const [selected, setSelected] = useState(0);

	const menuItems = React.Children.map(children, (item, index) => {
		const isSelected = selected === index ? true : false;

		return (
			<button
				key={'tab-button--' + index}
				id={'tabmenu__' + item.props.id}
				className="csb-tabs__button"
				type="button"
				role="tab"
				aria-selected={isSelected ? 'true' : 'false'}
				aria-controls={'tabpanel__' + item.props.id}
				{ ... (!isSelected && {tabIndex: '-1'})}
				onClick={() => setSelected(index)}
			>
				<span className="csb-tabs__button-label">
					<span className="csb-tabs__button-text">{item.props.label}</span>
				</span>
			</button>
		);
	});

	const panelItems = React.Children.map(children, (item, index) => {
		const isSelected = selected === index ? true : false;

		return (
			<div
				key={'tab-content--' + index}
				id={'tabpanel__' + item.props.id}
				className="csb-tabs__panel"
				role="tabpanel"
				aria-labelledby={'tabmenu__' + item.props.id}
				{ ... (!isSelected && { hidden: 'hidden' })}
			>
				{item.props.children}
			</div>
		);
	});

	return (
		<div role="tablist" className="csb-tabs" {...args}>
			<div className="csb-tabs__menu">
				<div className="csb-content">
					{menuItems}
				</div>
			</div>
			<Content title={title}>
				{panelItems}
			</Content>
		</div>
	);
}
