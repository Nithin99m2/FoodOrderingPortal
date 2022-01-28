const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
    password: {
		type: String,
		required: true
	},
	contactNumber:{
		type: String,
		required: true
	},
	age:{
		type: String,
		required: true
	},
	batchName:{
		type: String,
		required: true
	},
	favs:{
		type: Array,
		required: false
	}
});



module.exports = User = mongoose.model("Users", UserSchema);
