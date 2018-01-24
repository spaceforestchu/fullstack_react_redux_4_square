import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import VenuesMap from './VenuesMap';
import { Link } from 'react-router-dom';
import VenueModal from './VenueModal';
import VenueView from './venueView';

import {
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll'

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


 ScrollToId = (id) => {

	 scroller.scrollTo(id -1 , {
		 smooth: true,
		 offset: 50
	 })
 }



	componentDidUpdate(prevProps, prevState){
		console.log(prevProps, prevState);
	}



	scrollToDiv = () => {
		console.log('scrollToDiv on Click', this.scrollToId);

		if(!this.scrollToId) return;

		const elId = `venueItem_${this.scrollToId}`;
		const itemDiv = document.getElementById(`venueItem_${this.scrollToId}`);
		console.log('item:', itemDiv, 'id:', elId);
		if(itemDiv){
			const offsetTop = itemDiv.offsetTop;
			console.log('[scrollToDiv] Div to scroll to:', itemDiv, 'offsetTop:', offsetTop);
			this.divEl.scrollTop = offsetTop;
		}
	}

	scrollToId = null;

	componentWillReceiveProps(nextProps) {
		console.log('100 nextProps', nextProps);

		if(nextProps.scrollToId && nextProps.scrollToId !== this.props.scrollToId){
			this.scrollToId = nextProps.scrollToId;
			this.scrollToDiv();
		}

	}


	render(){

		if (this.props.scrollToId !== null) {
			 console.log(this.props.scrollToId);
			 this.ScrollToId(this.props.scrollToId);
		 }


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
				<div ref={el => this.divEl = el} className='col-md-4 col-md-offset-8' name='venueList' style={{overflowY: 'scroll', height: 100 +'vh'}}>
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
		venues: state.venue.venues,
		scrollToId: state.scrollToView.id
	}
}

const dispatchToProps = (dispatch) => {
	return {
		venuesReceived: (venues) => dispatch(actions.venuesReceived(venues)),
		fetchVenue: (id) => dispatch(actions.fetchVenue(id))
	}
}

export default connect(stateToProps, dispatchToProps)(Venues);
