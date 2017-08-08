var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

router.get('/', (req, res) => {
	queries.getAllCars().then(cars => {
		res.json(cars)
	})
});

router.get('/:id', (req, res) => {
	var id = req.params.id
	queries.getOneCar(id).then(car => {
		res.json(car)
	})
});

router.post('/', (req, res, next) => {
	queries.createCar(req.body).then(cars => {
		res.json(cars[0])
	})
});



module.exports = router;
