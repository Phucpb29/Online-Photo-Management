import React, { Suspense } from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import Error from './components/error/error';
import Photo from './pages';

// lazy loading photo when waiting components
// const Photo = React.lazy(() => import('./pages/index'));

function App() {
	return (
		<div className="photo-app">
			<Suspense fallback={<div>Loading ..... </div>}>
				<BrowserRouter>
					<ul>
						<li>
							<Link to="/photos">Go to photo page</Link>
						</li>
						<li>
							<Link to="/photos/add">Go to add new photo page</Link>
						</li>
						<li>
							<Link to="/photos/123">Go to update photo page</Link>
						</li>
					</ul>
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
