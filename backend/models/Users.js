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
	},
	wallet:{
		type: Number,
		required: false,
		min:0,
		default:0
	}
});



module.exports = User = mongoose.model("Users", UserSchema);
