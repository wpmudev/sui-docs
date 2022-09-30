import React, { Children } from "react";

import "../assets/css/grid.css";

const isUndefined = (element) => {
	if ( element && '' !== element && 'undefined' !== typeof element ) {
		return false;
	}

	return true;
}

export const Row = ({ children }) => {
	const columns = Children.map( children, ( child, index ) => {
		let colSize = "csb-col";

		if ( !isUndefined(child.props.size) && !Number.isNaN(child.props.size) ) {
			colSize += " csb-col--" + child.props.size;
		}

		return (
			<div key={index} className={colSize}>
				{ child.props.children }
			</div>
		);
	} );

	return (
		<div className="csb-row">
			{columns}
		</div>
	);
}