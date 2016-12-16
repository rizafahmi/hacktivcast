exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('episodes', (table) => {
      table.increments('id').primary()
      table.string('title')
      table.string('body')
      table.string('url')
      table.integer('show_id')
        .references('id')
        .inTable('shows')
      table.timestamps()
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('episodes')
  ])
}
