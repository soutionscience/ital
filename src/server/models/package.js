let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Day = new Schema({
    title: String,
    desc: String,
    image: String

});

let Image = new Schema({
    originalname: String,
    filename: String
})

let Package = new Schema({
    title: String,
    desc: String,
    days: [Day],
    images: [Image]
});

module.exports = mongoose.model('Package', Package);
