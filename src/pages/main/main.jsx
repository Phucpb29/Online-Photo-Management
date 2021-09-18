import Banner from 'components/banner/banner';
import React from 'react';
import { Link } from 'react-router-dom';

MainPage.propTypes = {};

function MainPage(props) {
	return (
		<div>
			<Banner title="Đây là trang chủ" />
			<Link to="/photos/add">Add new photo</Link>
		</div>
	);
}

export default MainPage;
