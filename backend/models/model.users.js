const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id:{ type: mongoose.Schema.Types.ObjectId, auto: true},
    location: String,
    personsInHouse: Number,
    houseSize: String
  })

module.exports = mongoose.model('Users', userSchema);