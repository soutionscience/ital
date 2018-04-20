var Service = require('../models/services');

exports.post= function (req, res, next) {
    let newService = new Service(req.body);
    newService.save(function(err, pack){
        if(err) throw err;
        res.status(201).send('new Service saved')
    })
  
}

exports.get= function(req, res, next) {
    console.log('hitting get')
    Service.find({})
    .exec(function(err, resp){
        if(err) throw err;
        res.status(200).json(resp)
    })
 
}
exports.delete = function(req, res , next){
    console.log('hitting delete');
    Service.deleteMany({})
    .exec(function(err, resp){
        if(err) throw err;
        res.status(200).send("deleted all")
    })

}
exports.postTypes = function(req, res, next){
    console.log('hitting post days');
    Service.findById(req.params.id, function(err, resp){
        if(err) throw err;
        resp.services.push(req.body);
        resp.save(function(err, result){
            if(err) throw err;
            res.status(201).send("added days to Service")
        })

    })
};

exports.postImages = function(req, res, next){
    console.log('post images to services')
    Service.findById(req.params.id, function(err, resp){
        if (err)throw err;
     for(var i = (resp.images.length-1); i>=0; i--){
         resp.images.id(resp.images[i]._id).remove();
  
     }
    resp.images.push(req.body)
    resp.save(function(err, result){
        if(err) throw err;
        res.status(201).send({status: "images added"});
    })
    })

}