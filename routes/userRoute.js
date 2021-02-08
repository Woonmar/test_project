const express = require('express')
const router = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

router.get('/', (req, res) => {
  User.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
})

router.post('/', (req, res) => {
  const user = new User(req.body)
      user.save()
        .then((result) => {
        res.send(result)
      })
      .catch((err) => console.log(err))
})
  
module.exports = router;