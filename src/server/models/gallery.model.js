let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let Gallery = new Schema({
    title: String,
    shortdesc: String,
    filename: String,
    desc: String,
    
});

module.exports = mongoose.model('Gallery', Gallery);
