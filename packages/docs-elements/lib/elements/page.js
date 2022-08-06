import React, { useState } from "react";

import '../assets/css/page.css';
import '../assets/css/tooltip.css';

export const Page = ({ title, status, light = false, children }) => {
	const [ isHovering, setIsHovering ] = useState( false );

	const handleMouseOver = () => {
		setIsHovering( true );
	}

	const handleMouseOut = () => {
		setIsHovering( false );
	}

	let statusName, statusDesc, statusClass;

	switch ( status ) {
		case 'planned':
			statusName = 'Planned';
			statusDesc = 'Planned, not ready for use';
			statusClass = '';
			break;

		case 'draft':
			statusName = 'Draft';
			statusDesc = 'Draft, still in development mode';
			statusClass = ' csb-tag--yellow';
			break;

		case 'ready':
			statusName = 'Ready';
			statusDesc = 'Ready, can be used in production'
			statusClass = ' csb-tag--blue';
			break;

		case 'dead':
			statusName = 'Deprecated';
			statusDesc = 'Deprecated, soon to be removed';
			statusClass = ' csb-tag--red';
			break;

		default:
			statusName = false;
			statusClass = '';
			break;
	}

	const statusTag = (
		<span className={`csb-tooltip${ isHovering ? ' csb-tooltip--active' : '' }`}>
			<span
				className={`csb-tag${ statusClass }`}
				aria-describedby={`page-status--${ status && status !== '' ? status : 'planned' }`}
				onMouseOver={ handleMouseOver }
				onMouseOut={ handleMouseOut }>
				{ statusName }
			</span>
			<span role="tooltip" className="csb-tooltip__message">
				{ isHovering && (
					<>{ statusDesc }</>
				)}
			</span>
		</span>
	);

	return (
		<div className={ `csb-page${ light ? ' csb-page--white' : '' }` }>
			{ '' !== title &&
				<div className="csb-heading">
					<div className="csb-content">
						<h1 className="csb-page__title">{ title }{ statusName ? statusTag : '' }</h1>
					</div>
				</div>
			}

			{ children }
		</div>
	);
}

// <span id="tip1" class="tooltip" role="tooltip" >Also known as User ID</span>
