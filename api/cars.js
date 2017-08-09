var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

router.get('/', (req, res, next) => {
	queries.getAllCars()
		.then(cars => {
		res.json(cars)
	}).catch(error => {
		next(error)
	})
});

router.get('/:id', (req, res) => {
	var id = req.params.id
	queries.getOneCar(id)
		.then(car => {
		res.json(car)
	})
});

router.post('/', (req, res, next) => {
	queries.createCar(req.body)
		.then(cars => {
		res.json(cars[0])
	})
});

router.delete('/:id', (req, res, next) => {
	var id = req.params.id
	queries.deleteCar(id)
		.then(cars => {
		res.json(cars)
		}).catch(error => {
		next(error)
	})
});

router.put('/:id', (req, res, next) => {
	queries.updateCar(req.params.id, req.body)
		.then(cars => {
		res.json(cars)
	}).catch(error => {
		next(error);
	})
});
module.exports = router;
