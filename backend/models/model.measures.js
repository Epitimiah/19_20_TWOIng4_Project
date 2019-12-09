const mongoose = require('mongoose');

const measureSchema = new mongoose.Schema({
    _id:{ type: mongoose.Schema.Types.ObjectId, auto: true},
    type: String,
    creationDate: String,
    sensorID: { type: mongoose.Schema.Types.ObjectId, auto: true},
    value: String
},
{
    collection: 'Measure'
});

module.exports = mongoose.model('Measures', measureSchema);