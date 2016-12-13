const knex = require('./knex.js')

const Shows = () => {
  return knex('shows')
}

const getAll = () => {
  return Shows().select()
    .orderBy('id', 'asc')
}

module.exports = {
  getAll: getAll
}
