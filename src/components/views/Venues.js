import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import VenuesMap from './VenuesMap';
import { Link } from 'react-router-dom';
import VenueModal from './VenueModal';
import VenueView from './venueView';

class Venues extends Component {

	constructor(props) {
		super(props);

		this.state = {
			  modalIsOpen: false
		}

	}

	openModal = () => {
		this.setState({modalIsOpen: true});
	}

	afterOpenModal = () => {
		// references are now sync'd and can be accessed.
		this.subtitle.style.color = '#f00';
	}

	closeModal = () => {
		this.setState({modalIsOpen: false});
	}


  handleModal = () => {

		this.openModal();

	}

	handleClicks = (id) => {
		this.props.fetchVenue(id);
		this.handleModal();
	}

	render(){

		const venues = this.props.venues || [];

		let modal;

		if (this.state.modalIsOpen) {
			modal = <VenueModal
				isOpen={this.state.modalIsOpen}
				closeModal={this.closeModal}
				onAfterOpen={this.afterOpenModal}

				/>
		}

		return (
			<div className='row' style={{width: 100 + '%'}}>
				<div className='col-md-4 col-md-offset-8' style={{overflowY: 'scroll', height: 100 +'vh'}}>
					<VenueView venues={venues} handleClicks={this.handleClicks}/>
				</div>
				<div className='col-md-8' style={{height: 100 +'vh', width: 100 + 'vh'}}>
					<VenuesMap containerElement='100vh' mapElement='100vh' />
				</div>
					{modal}
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		venues: state.venue.venues
	}
}

const dispatchToProps = (dispatch) => {
	return {
		venuesReceived: (venues) => dispatch(actions.venuesReceived(venues)),
		fetchVenue: (id) => dispatch(actions.fetchVenue(id))
	}
}

export default connect(stateToProps, dispatchToProps)(Venues);
