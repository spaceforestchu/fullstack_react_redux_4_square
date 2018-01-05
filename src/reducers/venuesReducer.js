import constants from '../constants';

var initialState = {
	venues: null,
	venue: null
}

export default (state=initialState, action) => {
  let updated = Object.assign({}, state);
	switch (action.type) {

		case constants.VENUES_RECEIVED:
			console.log('VENUES_RECEIVED: ', action.venues.groups[0].items[0].venue);
			return;
			//updated['venues'] = action.venues.groups.items;
			//updated['venues'] = action.venues.venues;
			console.log(JSON.stringify(updated));
			return updated;
		case constants.FETCH_VENUE:

			const venueID = action.id;
			const venues = updated.venues;
			let foundVenue;
			venues.filter((venue, index) => {
				if (venue.id === venueID) {
					foundVenue = venue;
				}
			});

			updated['venue'] = foundVenue;

			return updated
		default:
			return state;
	}


}
