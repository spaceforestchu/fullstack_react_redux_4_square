import React, {Component} from 'react';
import { NavContainer } from '../containers';
import { Venues, VenueModal } from '../views';

class Main extends Component {

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
