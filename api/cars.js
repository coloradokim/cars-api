var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

router.get('/', (req, res) => {
	queries.getAllCars().then(cars => {
		res.json(cars)
	})
});



module.exports = router;
