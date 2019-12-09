const User = require('../models/model.users');
const mongoose = require('mongoose');

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.location) {
      // If location is not present in body reject the request by
      // sending the appropriate http code
      return res.status(400).send({
        message: 'location can not be empty'
      });
    }
  
    // Create a new User
    const user = new User();
      user.location = req.body.location;
      user.personsInHouse = req.body.personsInHouse;
      user.houseSize = req.body.houseSize;
  
    // Save User in the database
    user
      .save()
      .then(data => {
        // we wait for insertion to be complete and we send the newly user integrated
        res.send(data);
      })
      .catch(err => {
        // In case of error during insertion of a new user in database we send an
        // appropriate message
        res.status(500).send({
          message: err.message || 'Some error occurred while creating the User.'
        });
      });
  };
  
  // Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
    User.find()
      .then(users => {
        res.send(users);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving users.'
        });
      });
};
  
  // Find a single User with a UserId
exports.findOne = (req, res) => {
    id = mongoose.Types.ObjectId(req.params.id);
    User.findById(id)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User not found with id ' + id
          });
        }
        res.send(user);
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'User not found with id ' + id
          });
        }
        return res.status(500).send({
          message: 'Error retrieving user with id ' + id
        });
      });
};
  
  // Update a User identified by the UserId in the request
exports.update = (req, res) => {
    id = mongoose.Types.ObjectId(req.params.id);
    // Validate Request
    if (!req.body.location) {
      return res.status(400).send({
        message: 'location can not be empty'
      });
    }
  
    // Find user and update it with the request body
    User.findByIdAndUpdate(
      id,
      {
        title: req.body.location
      },
      { new: true }
    )
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User not found with id ' + id
          });
        }
        res.send(user);
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'User not found with id ' + id
          });
        }
        return res.status(500).send({
          message: 'Error updating user with id ' + id
        });
      });
};
  
  // Delete a User with the specified UserId in the request
exports.delete = (req, res) => {
    id = mongoose.Types.ObjectId(req.params.id);
    User.findByIdAndRemove(id)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User not found with id ' + id
          });
        }
        res.send({ message: 'User deleted successfully!' });
      })
      .catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
            message: 'User not found with id ' + id
          });
        }
        return res.status(500).send({
          message: 'Could not delete user with id ' + id
        });
      });
};