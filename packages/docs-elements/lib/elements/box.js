import React from "react";

import "../assets/css/box.css";

export const Box = ({ title, children }) => {
	return (
		<div className="csb-box">
			{ title && title !== '' && (
				<h6 className="csb-box__title">{ title }</h6>
			)}

			{ children }
		</div>
	);
}
