import React, {Component} from 'react';
import { connect } from 'react-redux';

class Venue extends Component {

  render() {
		//const {} = this.props.venue;
    return (
			<div className="modal fade" id="loginOrSignUp" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Log In / Sign Up</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<ul className="nav nav-tabs" role="tablist">
								<li className="nav-item">
									<a className="nav-link active" data-toggle="tab" href="#home" role="tab">Sign In</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#profile" role="tab">Sign Up</a>
								</li>
							</ul>
							<div className="tab-content">
								<div className="tab-pane active" id="home" role="tabpanel">
									
								</div>
								<div className="tab-pane" id="profile" role="tabpanel">

								</div>
							</div>
						</div>
					</div>
				</div>
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
