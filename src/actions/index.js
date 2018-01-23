import constants from '../constants';
import { APIManager } from '../utils';

export default {
  venuesReceived: (venues) => {
    return {type: constants.VENUES_RECEIVED, venues: venues}
  },
  fetchVenue: (id) => {
    return {type: constants.FETCH_VENUE, id: id}
  },

  getLocation: () => {

		return (dispatch) => {

			APIManager.getGeoLocation()
				.then((response) => {
					dispatch({
						type: constants.GET_LOCATION,
						geos: response
					})
				})
				.catch((err) => {
					console.log('ERROR: ' + err);
				});
		}
  },
	scrollToList: (id) => {
		return {
			type: constants.SCROLL_TO_LIST,
			id: id
		}
	}
}
