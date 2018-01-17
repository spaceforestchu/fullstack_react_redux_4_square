import React, {Component} from 'react';
import { NavContainer } from '../containers';
import { Venues, VenueModal } from '../views';

class Main extends Component {

	constructor(props) {
			 super(props);
	 }


  render() {

		return (
			<div>
				<NavContainer />
				<Venues />
			</div>
		)
  }
}


export default Main;
