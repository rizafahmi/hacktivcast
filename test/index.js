process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app.js')
const knex = require('../db/knex.js')

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
        })
      done()
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
        })
      done()
    })
  })
})