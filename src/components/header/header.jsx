import React from 'react';
import { NavLink } from 'react-router-dom';
import './scss/header.scss';

Header.propTypes = {};

function Header(props) {
	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<div className="col">
						<a
							href="https://www.facebook.com/phamphuc29/"
							className="header__link header__title"
							target="_blank"
							rel="noopener noreferrer"
						>
							Fanpage
						</a>
					</div>
					<div className="col">
						<NavLink
							exact
							to="/photos"
							className="header__link"
							activeClassName="header__link-active"
						>
							Trang Chủ
						</NavLink>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
