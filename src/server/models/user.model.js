const mongoose = require('mongoose');
const Schema = mongoose.Schema


var user = new Schema({
    username: String,
    password: String,
    OauthId: String,
    OauthToken: String,
    firstname: {
    	type: String,
    	default: ''
    },
    lastname:{
    	type: String,
    	default: ''
    },
    admin:   {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model('user', user);