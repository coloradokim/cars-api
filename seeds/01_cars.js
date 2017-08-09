
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {model: 'mustang', make: 'ford', image: 'https://s.aolcdn.com/commerce/autodata/images/USC50FOC051B021001.jpg' , number_of_doors: 2},
        {model:'camaro', make:'chevy', image:'http://st.motortrend.com/uploads/sites/10/2016/10/2016-chevrolet-camaro-2ss-coupe-angular-front.png?interpolation=lanczos-none&fit=around%7C640%3A425', number_of_doors:2}
      ]);
    });
};
