import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import {connect} from 'react-redux';
import InfoWindowMap from './InfoWindow';

class VenuesMap extends Component {

	constructor(props){
		super(props);

		this.state = {
			zoom: 11,
			isOpen: false
		}
	}

	componentWillReceiveProps(){
		this.setState({
			zoom: 15
		});
	}


  render() {

		const venues = this.props.venues;
		const lngCurrentLocation = this.props.geoLocation.lng || null;
		const latCurrentLocation = this.props.geoLocation.lat || null;

		let markers;
		let userMarkers =  <Marker position={{lat:Number(latCurrentLocation), lng: Number(lngCurrentLocation) }} />
		if (venues !== null) {

			markers = venues.map((location, i) => {
				console.log(location)
				const lat = location.venue.location.lat
				const lng = location.venue.location.lng
				const index = i + 1 ;
				return (
					<InfoWindowMap
						key={index}
						lat={lat}
						lng={lng}
						index={index}
						location={location}
						/>
				)
			})
		} else {
			console.log('true');
			markers = <Marker position={{ lat: Number(latCurrentLocation), lng: Number(lngCurrentLocation)}}/>
		}

	const MapWithAMarker = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={this.state.zoom}
    defaultCenter={{ lat:Number(latCurrentLocation) || 40.7128, lng: Number(lngCurrentLocation) || -74.0060}}

  >
		{markers}
		{userMarkers}
  </GoogleMap>
);

		const googleMap = 	<MapWithAMarker
			containerElement={<div style={{ height: this.props.containerElement }} />}
			mapElement={<div style={{ height: this.props.mapElement}}  />}
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
		venues: state.venue.venues,
		geoLocation: state.geoLocation.currentLocation
	}
}

export default connect(stateToProps)(VenuesMap)
