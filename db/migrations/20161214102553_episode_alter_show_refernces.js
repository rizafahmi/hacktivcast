exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('episodes', (table) => {
      table.dropColumn('show_id')
    }),
    knex.schema.table('episodes', (table) => {
      table.integer('show_id')
      table.foreign('show_id').references('shows.id')
        .onDelete('CASCADE')
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('episodes', (table) => {
      table.dropColumn('show_id')
    })
  ])
}
