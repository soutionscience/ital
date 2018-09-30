const User = require('../models/user.model');
let verify = require('./verify');
const passport = require('passport');
let LocalStrategy = require('passport-local').Strategy

var local= passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


exports.get = function(req, resp, next){
    console.log("hitting user get")

    User.find({ }, function(err, users){
        if(err) throw err;
        resp.json(users)
    })

}

exports.register = function(req, res ,next){
    console.log('hitting post')
    User.register(new User({username: req.body.username}),
         req.body.password, function(err, user){
             if(err){
                 return res.status(500).json({err:err})
             }
             if(req.body.firstname){
                 user.firstname=  req.body.firstname
             }
             if(req.body.lastname){
                 user.lastname = req.body.lastname
             }
             user.save(function(err, user){
                 passport.authenticate('local')(req, res, function(){
                    return res.status(200).json({status: 'Registration Successful'}) 
                 })
             })
         })

}

exports.login = function(req, res, next){
    console.log("hitting login")
    passport.authenticate('local', function(err, user, info){
        if(err){
            return next(err)
        }
        if(!user){
            return res.status(401).json({
                err:info
            })
        }
        req.logIn(user,function(err, mine ){
            if(err){
                return res.status(500).json({
                    err: 'Could not log in user',
                    mine: user
                })
            }
            var token = verify.getToken(user)
             res.status(200).json({
                 status: 'Login successfull!',
                 success: true,
                 token:token
             })
        })
    })(req, res, next)

}
