const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

router.get('/watch', (req, res, next) => {
  res.render('watch', { title: 'Express' })
})

module.exports = router
