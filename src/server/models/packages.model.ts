let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Day = new Schema({
    title: String,
    desc: String,
    image: String

});

let Package = new Schema({
    title: String,
    shortdesc: String,
    desc: String,
    days: [Day]
});

module.exports = mongoose.model('Package', Package);
