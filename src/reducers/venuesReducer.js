import constants from '../constants';

var initialState = {
	venues: null
}

export default (state=initialState, action) => {

	switch (action.type) {

		case constants.VENUES_RECEIVED:
			console.log('VENUES_RECEIVED: ', action);
			let updated = Object.assign({}, state);
					updated['venues'] = action.venues.venues;
					return updated;
		default:
			return state;
	}


}
