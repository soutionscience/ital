const User = require('../models/user.model');
let verify = require('./verify');
const passport = require('passport');


exports.get = function(req, resp, next){
    console.log("hitting user get")

    User.find({ }, function(err, users){
        if(err) throw err;
        resp.json(users)
    })

}

exports.post = function(req, resp ,next){
    console.log('hitting post')

}
