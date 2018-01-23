import {  applyMiddleware, createStore, combineReducers }  from 'redux';
import thunk from 'redux-thunk';
import { venuesReducer, geoReducer, scrollToViewReducer } from '../reducers';

var store;

export default {

	initialize: () => {
		const reducers = combineReducers({
			venue: venuesReducer,
			geoLocation: geoReducer,
			scrollToView: scrollToViewReducer
		});

		store = createStore(
			reducers,
			 applyMiddleware(thunk)
		)

		return store

	},

	currentStore: () => {
		return store;
	}


}
