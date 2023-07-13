/**
 *
 * External Dependencies
 *
 */
import React, { Children } from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import LinkTo from "@storybook/addon-links/react"

/**
 *
 * Internal Dependencies
 *
 */
import { isUndefined } from "../../utils"
import logoLink from "../../../assets/images/wpmudev-logo.svg"
import "./footer.scss"

interface FooterProps {
	children: JSX.Element[] // Valid JSX Elements with props
}

const Footer: React.FunctionComponent<
	FooterProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
> = ({ children, ...props }) => {
	const menuItems = Children.map(children, (child, index) => {
		return (
			<li key={index} className="csb-footer__menu-item">
				{isUndefined(child?.props.link) && isUndefined(child?.props.kind) && (
					<>{child?.props?.label}</>
				)}

				{(!isUndefined(child?.props.link) ||
					!isUndefined(child?.props.kind)) && (
					<>
						{!isUndefined(child?.props.link) && (
							<a href={child?.props.link} target="_blank" rel="noreferrer">
								{child?.props.label}
							</a>
						)}

						{!isUndefined(child?.props.kind) && (
							<LinkTo kind={child?.props.kind} story={child?.props.story}>
								{child?.props.label}
							</LinkTo>
						)}
					</>
				)}
			</li>
		)
	})

	return (
		<div className="csb-footer" {...props}>
			<div className="csb-footer__brand">
				<img src={logoLink} alt="WPMU DEV Logo" aria-hidden="true" /> Powered by
				WPMU DEV
			</div>

			{!isUndefined(children) && (
				<div className="csb-footer__menu">
					<ul className="csb-footer__menu-list">{menuItems}</ul>
				</div>
			)}
		</div>
	)
}

export default Footer
