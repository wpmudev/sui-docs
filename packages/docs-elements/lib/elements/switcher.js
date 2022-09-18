import React, { useState, useEffect } from "react";
import { Select } from "./select";

import "../assets/css/switcher.css";

export const Switcher = ({ data = [], ...args }) => {
	const [selected, setSelected] = useState( data[0].data[0].value );

	const [subData, setSubData] = useState([]);
	const [hasSubData, setHasSubData] = useState( false );
	const [subSelection, setSubSelection] = useState();

	useEffect( () => {
		if ( 'undefined' !== typeof data[0].data[0].data && 0 < data[0].data[0].data.length ) {
			setSubData( [data[0].data[0]] );
			setHasSubData( true );
		}
	}, [] );

	if ( hasSubData && 'undefined' === typeof subSelection ) {
		setSubSelection( subData[0].data[0].value );
	}

	const buttons = data.map( ( button, index ) => {
		const btnId = button.id;
		const btnOptions = button.data;

		return (
			<Select
				key={ index }
				id={ `${btnId}-picker` }
				onChange={ e => {
					const selectedIndex = e.target.options.selectedIndex;
					const selectedOption = btnOptions[selectedIndex];

					// Set chosen option.
					setSelected( e.target.value );

					// Set option sub data if exists.
					if ( 'undefined' !== typeof selectedOption.data && selectedOption.data.length > 0 ) {
						setSubData( [btnOptions[selectedIndex]] );
						setHasSubData( true );
						setSubSelection( btnOptions[selectedIndex].data[0].value );
					} else {
						setSubData([]);
						setHasSubData( false );
						setSubSelection( subData[0].data[0].value );
					}
				} }>
				{ btnOptions.map( ( option, index ) => {
					const optLabel = option.label;
					const optValue = option.value;

					return (
						<option key={ index } value={ optValue }>
							{ optLabel }
						</option>
					);
				} ) }
			</Select>
		);
	} );

	let subButtons = [];

	if ( hasSubData ) {
		subButtons = subData.map( ( button, index ) => {
			const btnId = button.value + '-picker';
			const btnOptions = button.data;

			return (
				<Select
					key={ index }
					id={ btnId }
					onChange={ e => setSubSelection( e.target.value ) }
				>
					{ btnOptions.map( ( option, index ) => {
						const optLabel = option.label;
						const optValue = option.value;

						return (
							<option key={ index } value={ optValue }>
								{ optLabel }
							</option>
						);
					} ) }
				</Select>
			);
		} );
	}

	const boxes = data.map( ( box, index ) => {
		const boxOptions = box.data;

		return (
			<React.Fragment key={ index }>
				{ boxOptions.map( ( option, index ) => {
					const optValue = option.value;
					const optContent = option.content;
					const optData = option.data;

					// Hide content based on selected option.
					const hideContent = selected !== optValue && { hidden: 'hidden' };

					// Check if data content exists.
					const hasData = 'undefined' !== typeof optData;

					return (
						<div
							key={ index }
							className="csb-switcher__content"
							{ ... hideContent }>
							{ hasData && optData.map( ( subBox, index ) => {
								const hideSubContent = subSelection !== subBox.value && { hidden: 'hidden' };

								return (
									<div
										key={ index }
										{ ... hideSubContent }>
										{ subBox.content }
									</div>
								);
							} ) }
							{ !hasData && optContent }
						</div>
					);
				} ) }
			</React.Fragment>
		);
	} );

	return (
		<div className="csb-switcher" { ...args }>
			<div className="csb-switcher__bar">
				{ buttons }
				{ subButtons }
			</div>
			<div className="csb-switcher__content">
				{ boxes }
			</div>
		</div>
	);
}