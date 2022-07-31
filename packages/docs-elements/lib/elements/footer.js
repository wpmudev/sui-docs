import React from "react";
import logo from '../assets/images/logo.svg';

import '../assets/css/footer.css';

export const Footer = () => {
	return (
		<div className="csb-footer csb-footer--white">
			<div className="csb-footer__print">
				<img src={ logo } alt="WPMU DEV" aria-hidden="true" />
				Powered by WPMU DEV
			</div>

			<div className="csb-footer__links">
				<a
					href="https://wpmudev.com/terms-of-service/"
					target="_blank"
					rel="nofollow"
					className="csb-footer__link"
				>
					Terms
				</a>

				<a
					href="https://incsub.com/privacy-policy/"
					target="_blank"
					rel="nofollow"
					className="csb-footer__link"
				>
					Privacy
				</a>
			</div>
		</div>
	);
}
