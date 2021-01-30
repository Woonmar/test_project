const Blog = require('../models/blogs')

// Get blogs
const blog_index = (req, res) => {
  Blog.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
}

// Get one specific blog
const blog_detail = (req, res) => {
  const id = req.params.id
  Blog.findById(id)
  .then((result) => res.send(result))
  .catch((err) => console.log(err))
}

// Post blog
const blog_post = (req, res) => {
  const blog = new Blog(req.body) 
  blog.save()
  .then((result) => res.send(result))
  .catch((err) => console.log(err))
}

// Post update blog 
const blog_update = (req, res) => {
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

}
// Delete a blog
const blog_delete = (req, res) => {
  const id = req.params.id
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/blogs' })
    })
    .catch((err) => console.log(err))
}

module.exports = {
  blog_index,
  blog_detail,
  blog_post,
  blog_update,
  blog_delete,
}