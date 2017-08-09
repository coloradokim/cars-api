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
	deleteCar(id) {
		return knex('cars').where('id', id).del();
	},
	updateCar(id, body){console.log(id, body);
		console.log();
		return knex('cars').where('id', parseInt(id)).update(body)
			}
};
