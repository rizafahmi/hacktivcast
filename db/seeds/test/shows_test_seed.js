exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('shows').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('shows').insert({title: 'HACKTIVcast Series', description: 'Sebuah screencast series tentang pemrograman NodeJS, JavaScript, GIT, GitHub, VIM, editor dan teknologi lain yang terkait'}),
        knex('shows').insert({title: 'HACKTIVcast Labs', description: 'Sebuah unscripted live coding session dengan para expert, technology enthusiast dan coder professional'})
      ])
    })
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('episodes').insert({id: 1, title: 'Title 1', show_id: 1, episode_number: 1}),
        knex('episodes').insert({id: 2, title: 'Title 2', show_id: 2, episode_number: 1}),
        knex('episodes').insert({id: 3, title: 'Title 3', show_id: 1, episode_number: 2})
      ])
    })
}
