import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { NavContainer } from './components/containers'
import { Venues } from './components/views'

import store from './stores';
import { Provider } from 'react-redux';
require('./index.css');

class App extends Component {

	render(){
		return(
			<Provider store={store.initialize()}>
				<div>
					<NavContainer />
					<Venues />
				</div>
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
