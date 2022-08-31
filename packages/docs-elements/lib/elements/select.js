import React from "react";

import "../assets/css/select.css";

export const Select = ({ className, children, ...args }) => {
	const parentClass = className && className !== ''
		? ' ' + className
		: '';

	return (
		<select
			className={`csb-select${parentClass}`}
			{ ...args }>
			{ children }
		</select>
	);
}