process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app.js')

chai.use(chaiHttp)

describe('API routes', () => {
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
