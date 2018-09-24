const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

exports.getToken = function(user){ // assing jwt token to user provided
    return jwt.sign(user, process.env.secretKey, {
        expiresIn: 36000
    })
}

exports.verifyOrdinaryUsers = function(req, resp ,next){

    let token = req.body.token || req.query.token || req.headers['x-access-token'];


    if(token){
        jwt.verify(token, process.env.secretKey, function(err, decoded){
            if(err){
                var err = new Error('You are not authenticated!');
				err.status = 401;
				return next(err);
            }else{
                //if authenticated save decoded to request for use in other routes
                req.decoded = decoded
            }

        })

    }else{
        // return new eror if token is not provided
        let err = new error('No token is provided');
        err.status = 403;
        return next(err);
    }


}