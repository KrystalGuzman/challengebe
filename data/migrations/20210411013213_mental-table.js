
exports.up = function(knex) {
  return knex.schema
  .createTable('mental', (tbl) => {
    tbl.increments();
    tbl.string('frontMental').notNullable();
    tbl.string('backMental').notNullable();
  })
    .createTable('physical', (tbl) => {
    tbl.increments();
    tbl.string('frontPhysical').notNullable();
    tbl.string('backPhysical').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("physical")
  .dropTableIfExists("mental")
};
