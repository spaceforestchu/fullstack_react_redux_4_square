import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import actions from '../../actions';

class InputSearch extends Component {

	constructor(props) {
		super(props);
		this.state = {
			search: {
				zipCode: '',
				title: ''
			}
		}
	}

	handlSearchVenues = (event) => {
		event.preventDefault();
		const lat = this.props.geoLocation.lat;
		const lng = this.props.geoLocation.lng;
		let lngAndLat = null;
		let options = {};

		if (this.props.geoLocation !== null) {
			lngAndLat = lat + ',' + lng;
			options = {
				client_id: 'PHQ4BAMKWAOOL3Z43BWDQL0MHJG4QUCV4OEEZAELEKNTO4K1',
				client_secret: 'T4JTOW5HBIOPC3L3J14TBQNDPOMS25OHPF5WH5M2XLJNXJXM',
				ll: lngAndLat,
				query: this.state.search.title || '',
				v: '20180105',
				venuePhotos: "1"
			}
		}

		axios.get('https://api.foursquare.com/v2/venues/explore', {
			params: options
		})
		.then((response) => {
			const venues = response.data.response.groups[0].items;
			this.props.venuesReceived(venues);
 		})
 		.catch((error) => {
	 		console.log(error);
 		});



	}

	updateZipCode = (event) => {

		const value = event.target.value;
		const stateName = event.target.name;

		const newState = Object.assign(this.state.search, {});

		newState[stateName] = value;

		this.setState({
			search: newState
		});
	}

	render(){
		return(
			 <form className="form-inline my-2 my-lg-0">
					<button onClick={() => { this.props.getLocation() }} className="btn btn-outline-success" type='button' style={{marginRight: 10}}><i className="fa fa-map-marker fa-lg" style={{marginRight: 3}} aria-hidden="true"></i> Find My Location </button>
				  <input className="form-control mr-sm-2" placeholder='e.g Food/Coffee/Thai/Sushi' name='title' onChange={this.updateZipCode}/>
 					<button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handlSearchVenues}>Search</button>
			</form>
		)
	}
};

const stateToProps = (state) => {
	return {
		venues: state.venue.venues,
		geoLocation: state.geoLocation.currentLocation
	}
}

const dispatchToProps = (dispatch) => {
	return {
		venuesReceived: (venues) => dispatch(actions.venuesReceived(venues)),
		getLocation: () => dispatch(actions.getLocation())
	}
}

export default connect(stateToProps, dispatchToProps)(InputSearch);
