const mongoose = require("mongoose");
const moment = require("moment");
const now = moment();

const UserSchema = new mongoose.Schema({
	username: {type: String, default: ""},
	password: {type: String, default: ""},
	timestamp: {type: String, default: now.format("dddd, MMMM Do YYYY, h:mm:ss a")}
});

UserSchema.methods.summary = () => {
	var summary = {
		username: this.username,
		password: this.password,
		timestamp: this.timestamp
	};
	return summary;
};


module.exports = mongoose.model("UserSchema", UserSchema);
