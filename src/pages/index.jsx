import Error from 'components/error/error';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddPage from './add/add';
import UpdatePage from './edit/edit';
import MainPage from './main/main';

Photo.propTypes = {};

function Photo(props) {
	const match = useRouteMatch();
	console.log({ match });
	return (
		<div>
			<Switch>
				<Route exact path={match.url} component={MainPage} />
				<Route path={`${match.url}/add`} component={AddPage} />
				<Route path={`${match.url}/:photoId`} component={UpdatePage} />
				<Route component={Error} />
			</Switch>
		</div>
	);
}

export default Photo;
