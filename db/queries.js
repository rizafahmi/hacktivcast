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

module.exports = {
  getAll: getAll,
  getSingle: getSingle
}
