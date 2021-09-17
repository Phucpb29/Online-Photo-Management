import React, { Suspense } from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import './assets/scss/global.scss';
import Error from './components/error/error';
import Header from './components/header/header';

// lazy loading photo when waiting components
const Photo = React.lazy(() => import('./pages/index'));

function App() {
	return (
		<div className="photo-app">
			<Suspense fallback={<div>Loading ..... </div>}>
				<BrowserRouter>
					<Header />
					<Switch>
						<Redirect exact from="/" to="/photos" />
						<Route path="/photos" component={Photo} />
						<Route component={Error} />
					</Switch>
				</BrowserRouter>
			</Suspense>
		</div>
	);
}

export default App;
