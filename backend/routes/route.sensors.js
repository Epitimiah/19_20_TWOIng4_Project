var express = require('express');
var router = express.Router();
var Sensors = require('../controllers/controller.sensors');

router.get('/', Sensors.findAll);
router.get('/:id', Sensors.findOne);
router.put('/', Sensors.create);
router.post('/:id', Sensors.update);
router.delete('/:id', Sensors.delete);


module.exports = router;
