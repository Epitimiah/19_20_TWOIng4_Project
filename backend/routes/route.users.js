var express = require('express');
var router = express.Router();
var Users = require('../controllers/controller.users');

router.get('/', Users.findAll);
router.get('/:id', Users.findOne);
router.put('/', Users.create);
router.post('/:id', Users.update);
router.delete('/:id', Users.delete);

module.exports = router;
