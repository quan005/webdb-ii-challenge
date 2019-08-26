
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make: 'Audi', model: 'A4', vin: 'WAUBA24B3XN104537', mileage: '40000', transmissionType: 'Automatic', title: 'clean'},
        {make: 'Chevrolet', model: 'Corvette', vin: '1G1YU2DW3D5106459', mileage: '60000', transmissionType: 'Manual', title: 'salvage'},
        {make: 'Mercedes', model: 'G Wagon', vin: 'WDCYC7DH2JX286567', mileage: '87000', transmissionType: 'Automatic', title: 'clean'}
      ]);
    });
};
