var knex = require('./knex');

module.exports = {
	getAllCars() {
		return knex('cars');
	},
	getOneCar(id) {
		return knex('cars').where('id', id);
	},
	createCar(newCar) {
		return knex('cars').insert(newCar, "*");
	},
};
