import React, { Children, useState } from "react";

// Import required components.
import { Section } from "@wpmudev/sb-section";

// Import required styles.
import "./styles/sb-tabs.scss";

// Build "tabs" component.
const Tabs = ({ title, children, ...args }) => {
	const [selected, setSelected] = useState(0);
	const hasTitle = !isUndefined( title ) ? true : false;

	const menuItems = Children.map( children, ( item, index ) => {
		const isSelected = selected === index ? true : false;

		return (
			<button
				key={'tab-button--' + index}
				id={'tabmenu__' + item.props.id}
				className="csb-tabs__button"
				type="button"
				role="tab"
				aria-selected={ isSelected ? 'true' : 'false' }
				aria-controls={ 'tabpanel__' + item.props.id }
				{ ... ( !isSelected && { tabIndex: '-1' } )}
				onClick={() => setSelected( index )}
			>
				<span className="csb-tabs__button-label">
					<span className="csb-tabs__button-text">{ item.props.label }</span>
				</span>
			</button>
		);
	});

	const panelItems = Children.map( children, ( item, index ) => {
		const isSelected = selected === index ? true : false;

		return (
			<div
				key={ 'tab-content--' + index }
				id={ 'tabpanel__' + item.props.id }
				className="csb-tabs__panel"
				role="tabpanel"
				aria-labelledby={ 'tabmenu__' + item.props.id }
				{ ... ( !isSelected && { hidden: 'hidden' } )}
			>
				{ item.props.children }
			</div>
		);
	});

	return (
		<div role="tablist" className="csb-tabs" { ...args }>
			<Section border={ true } style={{ paddingTop: 0, paddingBottom: 0 }}>
				<div className="csb-tabs__menu">
					{ menuItems }
				</div>
			</Section>

			{ hasTitle && (
				<Section contained={ true }>
					<p className="csb-page__title">{ title }</p>
				</Section>
			)}

			{ panelItems }
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
export { Tabs }
