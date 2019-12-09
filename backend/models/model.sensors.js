const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
    _id:{ type: mongoose.Schema.Types.ObjectId, auto: true},
    creationDate: Date,
    location: String,
    userID: { type: mongoose.Schema.Types.ObjectId, auto: true}
})

module.exports = mongoose.model('Sensors', sensorSchema);