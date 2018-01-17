import {  applyMiddleware, createStore, combineReducers }  from 'redux';
import thunk from 'redux-thunk';
import { venuesReducer, geoReducer } from '../reducers';

var store;

export default {

	initialize: () => {
		const reducers = combineReducers({
			venue: venuesReducer,
			geoLocation: geoReducer
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
