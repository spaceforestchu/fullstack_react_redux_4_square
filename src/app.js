import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Main } from './components/layout'

import store from './stores';
import { Provider } from 'react-redux';
require('./index.css');

import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {

	render(){
		return(
			<Provider store={store.initialize()}>
				<BrowserRouter>
					<div>
						<Route path='/' component={Main}/>
					</div>
				</BrowserRouter>
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
