var express = require('express');
var router = express.Router();
var Measures = require('../controllers/controller.measures');

router.get('/', Measures.findAll);
router.get('/:id', Measures.findOne);
router.put('/', Measures.create);
router.post('/:id', Measures.update);
router.delete('/:id', Measures.delete);

module.exports = router;
