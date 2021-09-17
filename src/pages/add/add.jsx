import React from 'react';
import Banner from '../../components/banner/banner';
import './scss/add.scss';

AddPage.propTypes = {};

function AddPage(props) {
	return (
		<>
			<Banner title="Đây là trang thêm hình" />
			<div className="photo-wrapper">
				<p>Thêm</p>
			</div>
		</>
	);
}

export default AddPage;
