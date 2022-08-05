import React, { Children } from "react";

import '../assets/css/table.css';

export const Table = ({ id, title, description, children }) => {
	id = id && id !== '' ? id : 'missing-unique-id'

	return (
		<div
			role="table"
			className="csb-table"
			{ ... title && title !== '' && { 'aria-label': title } }
			{ ... description && description !== '' && { 'aria-describedby': id + '--description' } }>
			{ description && description !== '' && (
				<div id={`${id}--description`}>
					{description}
				</div>
			)}
			{ children }
		</div>
	);
}

export const TableCell = ({ role, scope, size, children }) => {
	const cellRole = role && role === true ? 'columnheader' : 'cell';
	const cellClass = scope && scope === true ? ' csb-table__cell-title' : '';
	const cellSize = size && size !== '' && ! Number.isNaN( size ) ? ' csb-table__col csb-table__col--' + size : '';

	return (
		<span role={ cellRole } className={`csb-table__cell${ cellSize }${ cellClass }`}>
			{ children }
		</span>
	);
}

export const TableRow = ({ role, children }) => {
	const columns = Children.map( children, ( child, index ) => {
		return (
			<TableCell
				key={ index }
				role={ role }
				size={ child.props.size }
				scope={ child.props.scope }>
				{ child.props.children }
			</TableCell>
		);
	});

	return (
		<div role="row" className="csb-table__row">
			{ columns }
		</div>
	);
}

export const TableHead = ({ children }) => {

	return (
		<div role="rowgroup">
			<TableRow role={ true }>
				{ children }
			</TableRow>
		</div>
	);
}

export const TableBody = ({ children }) => {
	const rows = Children.map( children, ( child, index ) => {
		return (
			<TableRow key={ index }>
				{ child.props.children }
			</TableRow>
		);
	});

	return (
		<div role="rowgroup">
			{ rows }
		</div>
	);
}