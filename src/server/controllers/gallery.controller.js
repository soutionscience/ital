let Gallery = require('../models/gallery.model')

exports.post = (req, res, next)=>{
 let newGallery= new Gallery(req.body)
 newGallery.save((err, pack)=>{
  if(err) throw err;
  res.status(201).send('created image')
 })

}

exports.get = (req, res, next)=>{
   Gallery.find({})
   .exec((err, resp)=>{
       if(err) throw err;
       res.status(200).json(resp)
   })

}

exports.deleteOne = function (req, res, next){
    Gallery.findByIdAndRemove(req.params.id, function(err,resp){
        if(err) throw err;
        res.status(200).send("deleted")
    })
}