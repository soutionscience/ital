let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Service = new Schema({
    title: String,
    desc: String,
    image: String

});

let Image = new Schema({
    originalname: String,
    filename: String
})

let Services = new Schema({
    title: String,
    desc: String,
    services: [Service],
    images: [Image]
});

module.exports = mongoose.model('Services', Services);
