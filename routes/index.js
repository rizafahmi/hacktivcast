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

/* PUT a show */
router.put('/shows/:id', (req, res, next) => {
  if (req.body.hasOwnProperty('id')) {
    return res.status(422).json({
      status: 'KO',
      error: 'You cannot update the id field'
    })
  }
  queries.update(req.params.id, req.body)
    .then(() => {
      return queries.getSingle(req.params.id)
    })
    .then((show) => {
      res.status(200).json(show)
    })
    .catch((err) => {
      next(err)
    })
})

/* DELETE /api/v1/shows/1 */
router.delete('/shows/:id', (req, res, next) => {
  queries.getSingle(req.params.id)
    .then((show) => {
      queries.deleteShow(req.params.id)
        .then(() => {
          res.status(200).json(show)
        })
        .catch((err) => {
          next(err)
        })
    })
    .catch((err) => {
      next(err)
    })
})

/* GET /api/v1/episodes_by_show_id/:id */
router.get('/episodes_by_show_id/:id', (req, res, next) => {
  queries.getEpisodes(req.params.id)
    .then((episodes) => {
      res.status(200).json(episodes)
    })
})

module.exports = router
