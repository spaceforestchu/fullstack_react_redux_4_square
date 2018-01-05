import React, {Component} from 'react';
import { connect } from 'react-redux';

class Venue extends Component {

  render() {
		//const {} = this.props.venue;
    return (
			<div>
				This is Venue
			</div>
		)
  }
}

const stateToProps = (state) => {
	return {
		venue: state.venue.venue
	}
}

export default connect(stateToProps)(Venue);
