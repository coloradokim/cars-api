
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {model: 'mustang', make: 'ford', image: 'https://s.aolcdn.com/commerce/autodata/images/USC50FOC051B021001.jpg' , number_of_doors: 2}
      ]);
    });
};
