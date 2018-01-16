import constants from '../constants';

var initialState = {
	currentLocation: {
		lat: null,
		lng: null
	}
}

export default (state=initialState, action) => {
  let updated = Object.assign({}, state);
	switch (action.type) {

		case constants.GET_LOCATION:

			const latitude = action.geos.latitude;
			const longitude = action.geos.longitude;

			let currentLocation = {
				lat: latitude,
				lng: longitude
			}

			updated['currentLocation'] = currentLocation;
			return updated;

		default:
			return state;
	}


}
