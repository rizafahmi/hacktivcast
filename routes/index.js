const express = require('express')
const router = express.Router()

const queries = require('../db/queries.js')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

/* GET all shows. */
router.get('/shows', (req, res, next) => {
  queries.getAll()
    .then((shows) => {
      res.status(200).json(shows)
    })
    .catch((error) => {
      next(error)
    })
})

/* GET single show. */
router.get('/shows/:id', (req, res, next) => {
  queries.getSingle(req.params.id)
    .then((show) => {
      res.status(200).json(show)
    })
    .catch((err) => {
      console.log(err)
      next(err)
    })
})

/* POST a show */
router.post('/shows', (req, res, next) => {
  queries.add(req.body)
    .then((showId) => {
      return queries.getSingle(showId)
    })
    .then((show) => {
      return res.status(200).json(show)
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
