exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('episodes', (table) => {
      table.integer('episode_number')
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('episodes', (table) => {
      table.dropColumn('episode_number')
    })
  ])
}
