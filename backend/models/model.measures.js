const mongoose = require('mongoose');

const measureSchema = new mongoose.Schema({
    _id:{ type: mongoose.Schema.Types.ObjectId, auto: true},
    type: String,
    creationDate: String,
    sensorID: Number,
    value: String
},
{
    collection: 'Measure'
});

module.exports = mongoose.model('Measures', measureSchema);