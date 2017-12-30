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

		axios.get('https://api.foursquare.com/v2/venues/search', {
			params: {
				v: '20140806',
				near: this.state.search.zipCode,
				client_id: 'PHQ4BAMKWAOOL3Z43BWDQL0MHJG4QUCV4OEEZAELEKNTO4K1',
				client_secret: 'T4JTOW5HBIOPC3L3J14TBQNDPOMS25OHPF5WH5M2XLJNXJXM',
				query: this.state.search.title || null
			}
		})
		.then((response) => {
			const venues = response.data.response;

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
					<input className="form-control mr-sm-2" type="text" placeholder="Enter zip-code" aria-label="Search" name='zipCode' onChange={this.updateZipCode}/>
					<input className="form-control mr-sm-2" placeholder='e.g Food/Coffee/Thai/Sushi' name='title' onChange={this.updateZipCode}/>
 					<button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handlSearchVenues}>Search</button>
			</form>
		)
	}
};

const stateToProps = (state) => {
	return {
		venues: state.venue.venues
	}
}

const dispatchToProps = (dispatch) => {
	return {
		venuesReceived: (venues) => dispatch(actions.venuesReceived(venues))
	}
}

export default connect(stateToProps, dispatchToProps)(InputSearch);