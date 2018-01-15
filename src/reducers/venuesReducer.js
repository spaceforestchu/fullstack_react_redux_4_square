import constants from '../constants';

var initialState = {
	venues: null,
	venue: null
}

export default (state=initialState, action) => {
  let updated = Object.assign({}, state);
	switch (action.type) {

		case constants.VENUES_RECEIVED:
			console.log('VENUES_RECEIVED: ', action);

			updated['venues'] = action.venues;

			return updated;
		case constants.FETCH_VENUE:
			console.log('FETCH_VENUE', action);
			const venueID = action.id;
			const venues = updated.venues;
			let foundVenue;
			venues.filter((location, index) => {
				if (location.venue.id === venueID) {
					foundVenue = location.venue;
				}
			});
			updated['venue'] = foundVenue;
			return updated
		default:
			return state;
	}


}
