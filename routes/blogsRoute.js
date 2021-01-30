const express = require('express')
const router = express.Router()
const blogsController = require('../controllers/blogsController')

router.get('/', blogsController.blog_index)
router.post('/', blogsController.blog_post)
router.get('/:id', blogsController.blog_detail)
router.post('/:id', blogsController.blog_update)
router.delete('/:id', blogsController.blog_delete)

module.exports = router;