const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
    _id:{ type: mongoose.Schema.Types.ObjectId, auto: true},
    creationDate: String,
    location: String,
    userID: { type: mongoose.Schema.Types.ObjectId, auto: true}
},{
    collection: 'Sensor'
});

module.exports = mongoose.model('Sensors', sensorSchema);