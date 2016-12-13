exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('shows').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('shows').insert({title: 'HACKTIVcast Series', description: 'Sebuah screencast series tentang pemrograman NodeJS, JavaScript, GIT, GitHub, VIM, editor dan teknologi lain yang terkait'}),
        knex('shows').insert({title: 'HACKTIVcast Labs', description: 'Sebuah unscripted live coding session dengan para expert, technology enthusiast dan coder professional'})
      ])
    })
}
