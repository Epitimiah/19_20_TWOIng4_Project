const Measure = require('../models/model.measures');
const mongoose = require('mongoose');

// Create and Save a new Measure
exports.create = (req, res) => {
    // Validate request
    if (!req.body.type) {
      // If type is not present in body reject the request by
      // sending the appropriate http code
      return res.status(400).send({
        message: 'type can not be empty'
      });
    }
  
    // Create a new Measure
    const measure = new Measure();
      measure.type = req.body.type;
      measure.creationDate = req.body.creationDate;
      measure.sensorID = req.body.sensorID;
      measure.value = req.body.value;

  
    // Save Measure in the database
    measure
      .save()
      .then(data => {
        // we wait for insertion to be complete and we send the newly measure integrated
        res.send(data);
      })
      .catch(err => {
        // In case of error during insertion of a new measure in database we send an
        // appropriate message
        res.status(500).send({
          message: err.message || 'Some error occurred while creating the Measure.'
        });
      });
  };
  
  // Retrieve and return all Measures from the database.
exports.findAll = (req, res) => {
    Measure.find()
      .then(measures => {
        res.send(measures);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving measures.'
        });
      });
};
  
  // Find a single Measure with an id
exports.findOne = (req, res) => {
    id = mongoose.Types.ObjectId(req.params.id);
    Measure.findById(id)
      .then(measure => {
        if (!measure) {
          return res.status(404).send({
            message: 'Measure not found with id ' + id
          });
        }
        res.send(measure);
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'Measure not found with id ' + id
          });
        }
        return res.status(500).send({
          message: 'Error retrieving measure with id ' + id
        });
      });
};
  
  // Update a Measure identified by the id in the request
exports.update = (req, res) => {
    id = mongoose.Types.ObjectId(req.params.id);
    // Validate Request
    if (!req.body.type) {
      return res.status(400).send({
        message: 'type can not be empty'
      });
    }
  
    // Find measure and update it with the request body
    Measure.findByIdAndUpdate(
      id,
      {
        type: req.body.type,
        creationDate: req.body.creationDate,
        sensorID: req.body.sensorID,
        value: req.body.value
      },
      { new: true }
    )
      .then(measure => {
        if (!measure) {
          return res.status(404).send({
            message: 'Measure not found with id ' + id
          });
        }
        res.send(measure);
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'Measure not found with id ' + id
          });
        }
        return res.status(500).send({
          message: 'Error updating measure with id ' + id
        });
      });
};
  
  // Delete a Measure with the specified id in the request
exports.delete = (req, res) => {
    id = mongoose.Types.ObjectId(req.params.id);
    Measure.findByIdAndRemove(id)
      .then(measure => {
        if (!measure) {
          return res.status(404).send({
            message: 'Measure not found with id ' + id
          });
        }
        res.send({ message: 'Measure deleted successfully!' });
      })
      .catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
            message: 'Measure not found with id ' + id
          });
        }
        return res.status(500).send({
          message: 'Could not delete measure with id ' + id
        });
      });
};