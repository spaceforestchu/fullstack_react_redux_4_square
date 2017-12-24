const User = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports = {

	get: (params, isRaw) => {
		return User.find(params, async (err, profiles) => {
			const error = await err;
			const response = await profiles;

			if (error) {
				return error;
			}
			if (isRaw === true) {
				return response;
			} else {
				let list = [];

				response.forEach( (profile, i) => {
					list.push(profile[i].summary());
				});
				return list;
			}
		});
	},
	getById: (id, isRaw) => {
		return User.findById(id, async (err, user) => {

			const error = await err;
			const response = await user;

			if (error) {
				return error;
			}

			if (isRaw === true) {
				return response;
			} else {
				return response.summary();
			}
		});
	},
	post: (params, isRaw) => {

		if (params["password"]) {
			params["password"] = bcrypt.hashSync(params.password, 10);
		}

		return User.create(params, async (err, user) => {

			const error = await err;
			const response = await user;
			
			if (error) {
				return error;
			}

			if (isRaw === true) {
				return response;
			} else {
				return response.summary();
			}
		});
	},
	update: (id, isRaw, params) => {
		return User.findByIdAndUpdate(id, params, {new: true}, async (err, user) => {

			const error = await err;
			const response = await user;

			if (error) {
				return error;
			}

			if (isRaw === true) {
				return response;
			} else {
				return response.summary();
			}
		});
	},
	delete: (id) => {
		return User.findByIdAndRemove(id, async (err, user) => {
			const error = await err;
			const response = await user;

			if (error) {
				return error;
			}
			return response;
		});
	}
};
