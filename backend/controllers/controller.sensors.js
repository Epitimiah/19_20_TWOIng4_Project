const Sensor = require('../models/model.sensors');
const mongoose = require('mongoose');

// Create and Save a new Sensor
exports.create = (req, res) => {
    // Validate request
    if (!req.body.location) {
      // If location is not present in body reject the request by
      // sending the appropriate http code
      return res.status(400).send({
        message: 'location can not be empty'
      });
    }
  
    // Create a new Sensor
    const sensor = new Sensor();
      sensor.creationDate = req.body.creationDate;
      sensor.location = req.body.location;
      sensor.userID = req.body.userID;
  
    // Save Sensor in the database
    sensor
      .save()
      .then(data => {
        // we wait for insertion to be complete and we send the newly sensor integrated
        res.send(data);
      })
      .catch(err => {
        // In case of error during insertion of a new sensor in database we send an
        // appropriate message
        res.status(500).send({
          message: err.message || 'Some error occurred while creating the Sensor.'
        });
      });
  };
  
  // Retrieve and return all sensors from the database.
exports.findAll = (req, res) => {
    Sensor.find()
      .then(sensors => {
        res.send(sensors);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving sensors.'
        });
      });
};
  
  // Find a single Sensor with an id
exports.findOne = (req, res) => {
    id = mongoose.Types.ObjectId(req.params.id);
    Sensor.findById(id)
      .then(sensor => {
        if (!sensor) {
          return res.status(404).send({
            message: 'Sensor not found with id ' + id
          });
        }
        res.send(sensor);
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'Sensor not found with id ' + id
          });
        }
        return res.status(500).send({
          message: 'Error retrieving sensor with id ' + id
        });
      });
};
  
  // Update a Sensor identified by the id in the request
exports.update = (req, res) => {
    id = mongoose.Types.ObjectId(req.params.id);
    // Validate Request
    if (!req.body.location) {
      return res.status(400).send({
        message: 'location can not be empty'
      });
    }
  
    // Find sensor and update it with the request body
    Sensor.findByIdAndUpdate(
      id,
      {
        creationDate: req.body.creationDate,
        location: req.body.location,
        userID: req.body.userID,
      },
      { new: true }
    )
      .then(sensor => {
        if (!sensor) {
          return res.status(404).send({
            message: 'Sensor not found with id ' + id
          });
        }
        res.send(sensor);
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'Sensor not found with id ' + id
          });
        }
        return res.status(500).send({
          message: 'Error updating sensor with id ' + id
        });
      });
};
  
  // Delete a Sensor with the specified id in the request
exports.delete = (req, res) => {
    id = mongoose.Types.ObjectId(req.params.id);
    Sensor.findByIdAndRemove(id)
      .then(sensor => {
        if (!sensor) {
          return res.status(404).send({
            message: 'Sensor not found with id ' + id
          });
        }
        res.send({ message: 'Sensor deleted successfully!' });
      })
      .catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
            message: 'Sensor not found with id ' + id
          });
        }
        return res.status(500).send({
          message: 'Could not delete sensor with id ' + id
        });
      });
};