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

const update = (showId, updates) => {
  return Shows().where('id', parseInt(showId)).update(updates)
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update
}
