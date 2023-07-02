import React from "react";

// Import required styles.
import "./table.scss";

// Build "table" component.
const Table = ({ headers = [], content = [], border }) => {
	const heads = headers.map( ( col, index ) => {
		return (
			<th key={ index }>{ col }</th>
		);
	});

	const rows = content.map( ( row, index ) => {
		const columns = Object.keys( row.columns ).map( ( col, idxCol ) => {
			return (
				<td key={`${ index }-${ idxCol }`}>
					{ row.columns[col] }
				</td>
			);
		});

		return (
			<tr key={ index }>
				{ columns }
			</tr>
		);
	});

	const hasBorder = !isUndefined( border, true ) ? border : false;

	return (
		<table className={`csb-table${ hasBorder ? ' csb-table--borders' : '' }`}>
			{ heads.length > 0 && (
				<thead>
					<tr>{ heads }</tr>
				</thead>
			)}

			<tbody>
				{ rows }
			</tbody>
		</table>
	);
}

// Check if element is undefined.
const isUndefined = (element, isBool = false) => {
	const isValid = 'undefined' !== typeof element;
	const isNotEmpty = '' !== element;

	if ( element && isValid && isNotEmpty ) {
		if ( isBool ) {
			if ( 'boolean' === typeof element ) {
				return false;
			}
		} else {
			return false;
		}
	}

	return true;
}

// Publish required component(s).
export default Table;
