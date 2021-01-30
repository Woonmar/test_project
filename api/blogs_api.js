const express = require('express')
const router = express.Router()
const Blog = require('../models/blogs')

router.get('/', (req, res) => {
  Blog.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
})
router.get('/:id', (req, res) => {
  Blog.findById(req.params.id)
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
})

module.exports = router