var knex = require('./knex');

module.exports = {
	getAllCars() {
		return knex('cars');
	}
};
