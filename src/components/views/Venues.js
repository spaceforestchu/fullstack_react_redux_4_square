import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import VenuesMap from './VenuesMap';
import { Link } from 'react-router-dom';
import VenueModal from './VenueModal';

class Venues extends Component {

	constructor(props) {
		super(props);

		this.state = {
			  modalIsOpen: false
		}

		// this.openModal = this.openModal.bind(this);
		//  this.afterOpenModal = this.afterOpenModal.bind(this);
		//  this.closeModal = this.closeModal.bind(this);

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
					<ol>
						{
							venues.map( (location, index) => {

								const venue = location.venue;
								const photo = venue.photos
 								let venuePhoto;
								console.log(photo)

								if (photo.count === 0) {

									venuePhoto = '/images/No-image-found.jpg';
								} else {
									let venuePhotoPrefix = photo.groups[0].items[0].prefix;
									let venuePhotoSuffix = photo.groups[0].items[0].suffix;

									venuePhoto = venuePhotoPrefix + '128x128' + venuePhotoSuffix;
								}

								const title = venue.name;
								const venueRating = venue.rating;
								const boroughsAndCity = venue.location.formattedAddress[1].slice(0,13);
								const venueIndex = index + 1;
								const venueAddress = venue.location.address;
								const formattedPhone = (venue.contact.formattedPhone ? venue.contact.formattedPhone : '')
								const url = venue.url;
								return (
									<li style={{listStyleType: 'none'}} key={venue.id}>
										<div style={{padding:1, marginBottom: 12, backgroundColor: '#f9f9f9'}}>
											<div className='container' style={{padding: 0}}>
													<div className='row'>
														<div className='col-sm-4'>
															<img style={{padding: 5}} src={`${venuePhoto}`}/>
														</div>
														<div className='col-sm-8'>
															<span style={{ marginRight: 10, color: '#aeb4b6'}}>{venueIndex}.</span>
															<Link
																to='/'
																onClick={ () => this.handleClicks(venue.id)}

																>
																<h5 style={{paddingTop: 2, display: 'inline-block', wordWrap: "break-word"}}>{title}</h5>

																</Link>

															<div>
																<h5 style={{height: 15}}>{venueAddress}</h5>
																<span>{boroughsAndCity}</span>
																<br />
																<a href={`tel:${formattedPhone}`}><span>{formattedPhone}</span></a>
																	<div style={{backgroundColor: '#00B551', borderRadius: 10, textAlign: "center", float: 'right', marginRight: 5, padding: 6, marginTop: 10}}>
																		<span style={{color: 'white',  fontSize: 15}}>{venueRating}</span>
																	</div>
																<br />
																<a style={{wordWrap: "break-word", fontSize: 11}} href={url}>{url}</a>
															</div>
														</div>
													</div>
											</div>
										</div>
									</li>
								)
							})
					}
					</ol>
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
