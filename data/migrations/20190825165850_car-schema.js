
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.text('make', 128).notNullable();
      tbl.text('model', 128).notNullable();
      tbl.text('vin', 17).unique().notNullable();
      tbl.decimal('mileage').notNullable();
      tbl.text('transmissionType');
      tbl.text('title');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
