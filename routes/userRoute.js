const { response } = require('express')
const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const passport = require('passport')

router.get('/', (req, res) => {
  res.send(req.user)
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) res.send('No User bruh');
    else {
      req.logIn(user, err => {
        if (err) throw err;
        res.send('Successfully logined');
        console.log(user);
      })
    }
  })(req, res, next);
})

router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) console.log('User already exist');
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
      })
      user.save()
        .then((result) => console.log(result))
    }
  })
})

router.post('/logout', (req, res) => {
  req.logOut()
  
})
  
module.exports = router;