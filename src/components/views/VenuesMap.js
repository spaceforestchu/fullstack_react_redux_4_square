import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import {connect} from 'react-redux';

class VenuesMap extends Component {

  render() {

		let markers;

		if (this.props.venues !== null) {
			markers = this.props.venues.map((venue, i) => {
				return (
					<Marker
						key={i}
						position={{ lat: venue.location.lat, lng: venue.location.lng}}
					/>
				)
			})
		} else {
			markers = <Marker position={{ lat: 40.7589, lng:-73.9851}}/>
		}

	const MapWithAMarker = withGoogleMap(props =>
  <GoogleMap
		defaultCenter={{ lat: 40.7589, lng: -73.9851 }}
		center={{ lat: 40.7589, lng: -73.9851 }}
		zoom={15}
  >
  	{markers}

  </GoogleMap>
);

		const googleMap = 	<MapWithAMarker
			containerElement={<div style={{

													height: `410vh`
			}} />}
			mapElement={<div style={{

												height: `410vh`
			 }} />}
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
