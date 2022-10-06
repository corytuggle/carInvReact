import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Contact, About, Inventory, SignIn } from './components';
import './style.css';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { firebaseConfig } from './firebaseConfig';
import 'firebase/auth';
import { Provider, ReactReduxContext } from 'react-redux';
import { store } from './redux/store';

const temp_props = "Tuggle's Vehicle Inventory Service"

ReactDOM.render(
	<React.StrictMode>
		<React.Suspense fallback={<>...</>}>
			<FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
				<Provider store={store}>
					<Router>
						<Switch>

							<Route exact path='/'>
								<Home title={temp_props} />
							</Route>

							<Route path='/inventory'>
								<Inventory></Inventory>
							</Route>

							<Route path='/contact'>
								<Contact></Contact>
							</Route>

							<Route path='/about'>
								<About></About>
							</Route>

							<Route path='/signin'>
								<SignIn></SignIn>
							</Route>
						</Switch>
					</Router>
				</Provider>
			</FirebaseAppProvider>
		</React.Suspense>
	</React.StrictMode>,

	document.getElementById('root')
);