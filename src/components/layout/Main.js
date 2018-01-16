import React, {Component} from 'react';
import { NavContainer } from '../containers';
import { Venues, VenueModal } from '../views';
import { connect } from 'react-redux';
import actions from '../../actions';
class Main extends Component {

	constructor(props) {
			 super(props);
	 }

	 componentDidMount() {
		 this.props.getLocation();
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

const dispatchToProps = (dispatch) => {
	return {
		getLocation: () => dispatch(actions.getLocation())
	}
}
export default connect(null, dispatchToProps)(Main);
