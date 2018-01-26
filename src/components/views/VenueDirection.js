import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withGoogleMap, GoogleMap, DirectionsRenderer} from "react-google-maps";

class VenueDirection extends Component {

	constructor(props){
		super(props);

		this.state = {
			directions: null
		}

	}

	componentDidMount() {

		const lngCurrentLocation = this.props.geoLocation.lng
		const latCurrentLocation = this.props.geoLocation.lat

		const id = this.props.id;

		const destinationLat = this.props.venue.location.lat;
		const destinationLng = this.props.venue.location.lng;

		const DirectionsService = new google.maps.DirectionsService();



			 DirectionsService.route({
				 origin: new google.maps.LatLng(latCurrentLocation, lngCurrentLocation),
				 destination: new google.maps.LatLng(destinationLat, destinationLng),
				 travelMode: google.maps.TravelMode.WALKING
			 }, (result, status) => {
				 if (status === google.maps.DirectionsStatus.OK) {
					 console.log(result);
					 this.setState({
					directions: result,
					});
				 } else {
					 console.error(`error fetching directions ${result}`);
				 }
			 });
	}


	render() {

	const GoogleMapDirection = withGoogleMap(props =>
	<GoogleMap
		defaultZoom={11}
		defaultCenter={{ lat: 41.8507300, lng: -87.6512600}}
	>
		<DirectionsRenderer directions={this.state.directions} />
	</GoogleMap>
);

		const googleMap = 	<GoogleMapDirection
			containerElement={<div style={{ height: 80 + 'vh' }} />}
			mapElement={<div style={{ height:  80 + 'vh' }}  />}
		/>

		return (
			<div>
				{googleMap}
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		venue: state.venue.venue,
		geoLocation: state.geoLocation.currentLocation
	}
}

export default connect(stateToProps)(VenueDirection);
