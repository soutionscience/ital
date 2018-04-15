var Package = require('../models/package');

exports.post= function (req, res, next) {
    let newPackage = new Package(req.body);
    newPackage.save(function(err, pack){
        if(err) throw err;
        res.status(201).send('new package saved')
    })
  
}

exports.get= function(req, res, next) {
    console.log('hitting get')
    Package.find({})
    .exec(function(err, resp){
        if(err) throw err;
        res.status(200).json(resp)
    })
 
}
exports.postTypes = function(req, res, next){
    console.log('hitting post days');
    Package.findById(req.params.id, function(err, resp){
        if(err) throw err;
        resp.days.push(req.body);
        resp.save(function(err, result){
            if(err) throw err;
            res.status(201).send("added days to package")
        })

    })
}