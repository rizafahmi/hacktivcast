exports.up = (knex, Promise) => {
  return knex.schema.createTable('shows', (table) => {
    table.increments()
    table.string('title').notNullable().unique()
    table.string('description')
    table.string('thumbnail')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('shows')
}
