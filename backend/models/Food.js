const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FoodSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	rating:{
		type: Number,
		required: true
	},
	email:{
		type: String,
		required: true
	},
    type:{
		type: String,
		required: true
	},
	shopname:{
		type: String,
		required: true

	},
	opentime:{
		type: String,
		required: false

	},
	closetime:{
		type: String,
		required: false

	},
	vendorname:{
		type:String,
		required:false
	},
	soldcount:{
		type:Number,
		required:false,
		
	}
});



module.exports = Food = mongoose.model("Food", FoodSchema);
