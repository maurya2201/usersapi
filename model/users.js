const mongoose = require('mongoose');

const Users = mongoose.Schema({
name:String,
age:Number,
city:String,
hobby:String
});
module.exports = mongoose.model("Users",Users);
