import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Main } from './components/layout'
import { Venue } from './components/views'
import store from './stores';
import { Provider } from 'react-redux';
require('./index.css');

import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {

	render(){
		return(
			<Provider store={store.initialize()}>
				<BrowserRouter>
					<div>
						<Switch>
							<Route path='/'  component={Main}/>
						</Switch>
					</div>
				</BrowserRouter>
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
