exports.up = function(knex, Promise) {
	return knex.schema.createTable('cars', (table) => {
		table.increments();
		table.text('model');
		table.text('make');
		table.text('image');
		table.integer('number_of_doors');
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('cars');
};
