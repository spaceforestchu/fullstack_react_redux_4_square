import axios from 'axios';

export default {

	getGeoLocation: () => {
		return new Promise((resolve, reject) => {
			const geolocation = navigator.geolocation;

			if (!geolocation) {
				reject(new Error('Not Supported'));
			}

			geolocation.getCurrentPosition((position) => {
				resolve(position.coords);
			}, () => {
				reject(new Error('Permission denied'));
			});
		});

	}
}
