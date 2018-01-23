import constants from '../constants';

var initialState = {
	id: null
}

export default (state=initialState, action) => {
  let updated = Object.assign({}, state);
	switch (action.type) {

		case constants.SCROLL_TO_LIST:
			updated['id'] = action.id
			console.log(updated);
			return updated;
		default:
			return state;
	}


}
