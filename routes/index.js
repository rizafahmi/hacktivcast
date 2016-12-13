const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

/* GET all shows. */
router.get('/shows', (req, res, next) => {
  res.send('send shows back')
})

module.exports = router
