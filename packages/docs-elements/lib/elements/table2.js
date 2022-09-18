import React from "react";

import "../assets/css/table2.css";

export const Table = ({ head = [], className, children, ...args }) => {
	let buildHead, buildBody;

	if ( Array.isArray(head) ) {
		buildHead = head.map( ( item, index ) => {
			let content = item;

			if ( 'object' === typeof item ) {
				content = (
					<>
						{ 'undefined' !== item.title && item.title }
						{ 'undefined' !== item.title && 'undefined' !== item.subtitle && (
							<br />
						)}
						{ 'undefined' !== item.subtitle && (
							<small>{ item.subtitle }</small>
						)}
					</>
				);
			}

			return (
				<th key={ index } scope="col">
					{ content }
				</th>
			);
		} );
	}

	if ( 'undefined' !== typeof children && '' !== children ) {
		buildBody = children;
	}

	return (
		<div style={{ overflowX: 'auto' }}>
			<table
				className={`csb-table${'undefined' !== typeof className
					? ' ' + className :
					''
				}`}
				{ ...args }>
				{ 'undefined' !== buildHead && (
					<thead>
						<tr>
							{buildHead}
						</tr>
					</thead>
				)}
				{ 'undefined' !== buildBody && (
					<tbody>
						{buildBody}
					</tbody>
				)}
			</table>
		</div>
	);
}