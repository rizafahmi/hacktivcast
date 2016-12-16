process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../../app.js')
const knex = require('../../db/knex.js')

chai.use(chaiHttp)

describe('API routes', () => {
  beforeEach((done) => {
    knex.migrate.rollback()
      .then(() => {
        knex.migrate.latest()
          .then(() => {
            knex.seed.run()
              .then(() => {
                done()
              })
          })
      })
  })

  afterEach((done) => {
    knex.migrate.rollback()
      .then(() => {
        done()
      })
  })

  describe('GET /api/v1/shows', () => {

    it('should return all shows', (done) => {
      chai.request(server)
        .get('/api/v1/shows')
        .end((err, res) => {
          res.should.have.status(200)
          res.should.be.json
          res.body.should.be.a('array')
          res.body.length.should.equal(2)
          res.body[0].should.have.property('title')
          res.body[0].title.should.equal('HACKTIVcast Series')
          res.body[0].should.have.property('description')
          res.body[0].description.should.equal('Sebuah screencast series tentang pemrograman NodeJS, JavaScript, GIT, GitHub, VIM, editor dan teknologi lain yang terkait')

          done()
        })
    })
  })

  describe('GET /api/v1/shows/:id', () => {
    it('should return one show', (done) => {
      chai.request(server)
        .get('/api/v1/shows/1')
        .end((err, res) => {
          res.should.have.status(200)
          res.should.be.json
          res.body.should.be.a('object')
          res.body.should.have.property('title')
          res.body.title.should.equal('HACKTIVcast Series')
          res.body.should.have.property('description')
          res.body.description.should.equal('Sebuah screencast series tentang pemrograman NodeJS, JavaScript, GIT, GitHub, VIM, editor dan teknologi lain yang terkait')
          done()
        })
    })
  }) // end describe

  describe('POST /api/v1/shows', () => {
    it('should add a show', (done) => {
      chai.request(server)
        .post('/api/v1/shows')
        .send({
          title: 'Podcast',
          description: 'Podcast tentang fullstack technology'
        })
        .end((err, res) => {
          res.should.have.status(200)
          res.should.be.json
          res.should.be.a('object')
          res.body.should.have.property('title')
          res.body.title.should.equal('Podcast')
          res.body.should.have.property('description')
          res.body.description.should.equal('Podcast tentang fullstack technology')
          done()
        })
    })
  })

  describe('PUT /api/v1/shows/:id', () => {
    it('should update a show', (done) => {
      chai.request(server)
        .put('/api/v1/shows/1')
        .send({
          description: 'Sebuah screencast series tentang pemrograman NodeJS, JavaScript, GIT, GitHub, VIM, editor dan teknologi lain yang terkait.'
        })
        .end((err, res) => {
          res.should.have.status(200)
          res.should.be.json
          res.body.should.be.a('object')
          res.body.should.have.property('title')
          res.body.title.should.equal('HACKTIVcast Series')
          res.body.should.have.property('description')
          res.body.description.should.equal('Sebuah screencast series tentang pemrograman NodeJS, JavaScript, GIT, GitHub, VIM, editor dan teknologi lain yang terkait.')
          done()
        })
    })
  })

  describe('PUT /api/v1/shows/:id', () => {
    it('should not update a show if id is updated', (done) => {
      chai.request(server)
        .put('/api/v1/shows/1')
        .send({
          id: 22,
          description: 'Sebuah screencast series tentang pemrograman NodeJS, JavaScript, GIT, GitHub, VIM, editor dan teknologi lain yang terkait.'
        })
        .end((err, res) => {
          res.should.have.status(422)
          res.should.be.json
          res.body.should.be.a('object')
          res.body.should.have.property('status')
          res.body.status.should.equal('KO')
          done()
        })
    })
  })

  describe('DELETE /api/v1/shows/:id', () => {
    it('should delete a show', (done) => {
      chai.request(server)
        .delete('/api/v1/shows/1')
        .end((err, res) => {
          res.should.have.status(200)
          res.should.be.json
          res.body.should.be.a('object')
          res.body.should.have.property('title')
          res.body.title.should.equal('HACKTIVcast Series')
          res.body.should.have.property('description')

          chai.request(server)
            .get('/api/v1/shows')
            .end((getErr, getRes) => {
              getRes.should.have.status(200)
              getRes.should.be.json
              getRes.body.should.be.a('array')
              getRes.body.length.should.equal(1)
              getRes.body[0].should.have.property('title')
              getRes.body[0].title.should.equal('HACKTIVcast Labs')
              getRes.body[0].should.have.property('description')

              done()
            })
        })
    })
  })

  describe('GET /api/v1/episodes_by_show_id/:show_id', () => {
    it('should return all episodes for certain show id', (done) => {
      chai.request(server)
        .get('/api/v1/episodes_by_show_id/1')
        .end((err, res) => {
          res.should.have.status(200)
          res.should.be.json
          res.body.should.be.a('array')
          res.body[0].should.have.property('title')
          res.body[0].title.should.equal('Title 1')
          res.body[1].title.should.equal('Title 3')
          res.body[0].should.have.property('body')
          res.body[0].should.have.property('url')
          res.body[0].should.have.property('episode_number')
          done()
        })
    })
  })
})
