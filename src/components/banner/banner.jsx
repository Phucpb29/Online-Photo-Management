import React from 'react';
import './scss/banner.scss';
Banner.propTypes = {};

function Banner(props) {
	const { title, bgColor } = props;
	return (
		<div className="banner">
			<p className="banner__title">{title}</p>
		</div>
	);
}

export default Banner;
