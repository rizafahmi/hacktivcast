const knex = require('./knex.js')

const Shows = () => {
  return knex('shows')
}

const getAll = () => {
  return Shows().select()
    .orderBy('id', 'asc')
}

const getSingle = (showId) => {
  return Shows().where('id', parseInt(showId)).first()
}

const add = (show) => {
  return Shows().insert(show, 'id')
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add
}
