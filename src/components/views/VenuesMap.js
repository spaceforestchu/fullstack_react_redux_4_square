import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import {connect} from 'react-redux';

class VenuesMap extends Component {

  render() {

		const venues = this.props.venues;


		let markers;
		if (venues !== null) {

			markers = venues.map((location, i) => {
				const lat = location.venue.location.lat
				const lng = location.venue.location.lng
				const index = i + 1;
				return (
					<Marker
						key={i}
						position={{ lat: lat, lng: lng}}
						label={index.toString()}
					/>
				)
			})
		} else {
			markers = <Marker position={{ lat: 40.7589, lng:-73.9851}}/>
		}

	const MapWithAMarker = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 40.7589, lng: -73.9851 }}
  >
  	{markers}
  </GoogleMap>
);

		const googleMap = 	<MapWithAMarker
			containerElement={<div style={{ height: `100vh` }} />}
			mapElement={<div style={{ height: `100vh` }} />}
		/>

    return (
			<div>
				{googleMap}
			</div>
		)
  }
}

const stateToProps = (state) => {
  return {venues: state.venue.venues}
}

export default connect(stateToProps)(VenuesMap)
