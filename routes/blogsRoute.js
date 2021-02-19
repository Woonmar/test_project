const express = require('express')
const router = express.Router()
const Blog = require('../models/blogs')

router.get('/', (req, res) => {
  Blog.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
})

router.post('/', (req, res) => {
  const blog = new Blog(req.body) 
  console.log('New Blog', blog);
  blog.save()
    .then((result) => {
      console.log('result ',result)
      res.send(result)
    })
  .catch((err) => console.log('Posted blog error:',err))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  Blog.findById(id)
  .then((result) => res.send(result))
  .catch((err) => console.log(err))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  Blog.updateOne({ _id: id }, {
    $set: {
      title: req.body.title,
      snippet: req.body.snippet,
      body: req.body.body,
      author: req.body.author
    }
  }).then((result) => res.send(result))
    .catch((err) => console.log(err))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.log(err))
})

module.exports = router;