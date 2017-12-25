import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { NavContainer, Venues } from './components'

class App extends Component {

	render(){
		return(
			<div>
				<NavContainer />
				React app
				<Venues />
			</div>
		)
	}


}

ReactDOM.render(<App />, document.getElementById('app'));
