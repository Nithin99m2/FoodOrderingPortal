const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const Orderschema = new Schema({
	name: {
		type: String,
		required: true
	},
	vemail: {
		type: String,
		required: true
	},
    quantity: {
		type: Number,
		required: true
	},
	bemail:{
		type: String,
		required: true
	},
	price:{
		type: Number,
		required: true
	},
    status:{
        type:String,
        required:true
    },
    shopname:{
        type:String,
        required:true
    },
	ordertime:{
        type:String,
        required:false
    },
	yes:{
        type:Number,
        required:false,
		default:0
    },
	ant:{
        type:Number,
        required:false,
		default:0
    }


});



module.exports = Order = mongoose.model("Order", Orderschema);
