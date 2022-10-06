import React, { Children, useState } from "react";

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
			<div className="csb-tabs__menu">
				<div className="csb-content">
					{ menuItems }
				</div>
			</div>

			<div className="csb-page__content">
				{ hasTitle && (
					<div className="csb-page__container">
						<h2 className="csb-subtitle">{ title }</h2>
					</div>
				)}

				{ panelItems }
			</div>
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