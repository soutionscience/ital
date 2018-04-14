var Package = require('../models/package');

exports.post= function post(req, res, next) {
    let newPackage = new Package(req.body);
    newPackage.save(function(err, pack){
        if(err) throw err;
        res.status(201).send('new package saved')
    })
  
}

exports.get= function get(req, res, next) {
    console.log('hitting get')
    Package.find({})
    .exec(function(err, resp){
        if(err) throw err;
        res.status(200).json(resp)
    })
 
}