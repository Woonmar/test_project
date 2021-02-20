const express = require('express')
const router = express.Router()
const User = require('../models/user')
const passport = require('passport')
const jwt = require('jsonwebtoken')

const signToken = userID => {
  return jwt.sign({
    iss: "NoobCoder",
    sub: userID
  },"NoobCoder",{expiresIn: "1h"})
}

router.get('/', (req, res) => {
  res.send(req.user)
})

router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err)
      res.status(500).json({
        message: {
          msgBody: "Error has occured",
          msgError: true
        }
      })
    if (user)
      res.status(400).json({
        message: {
          msgBody: "User already taken",
          msgError: true
        }
      })
    else {
      const user = new User(req.body)
      user.save()
        .then(() => res.status(201).json({
          message: {
            msgBody: "Successfully created the account",
            msgError: false
          }
        }))
    }
  })
})

router.post('/login', passport.authenticate('local', {session: false}) , (req, res) => {
  if (req.isAuthenticated) {
    console.log("authenticated");
    const { _id, username, role, email } = req.user;
    const token = signToken(_id);
    res.cookie('access_token', token, { httpOnly: true, sameSite: true });
    res.status(200).json({ isAuthenticated: true, user: { username, role, email } });
  } else {
    console.log('Unauthenticated');
  }
})

router.get('/admin', passport.authenticate('jwt', {session: false}), (req, res) => {
  if (req.user.role === 'admin') {
    res.status(500).json({
      message: {
        msgBody: "You are an admin",
        msgError: false
      }
    })
  } else {
    res.status(500).json({
      message: {
        msgBody: "You are not an admin",
        msgError: true
      }
    })
  }
}) 

router.get('/authenticated', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { username, role, email } = req.user;
  res.status(200).json({ isAuthenticated: true, user: { username, role, email } });
})

router.get('/logout', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.clearCookie('access_token');
  res.json({user: {username: '', role: ''}, success: true})
}) 
  
module.exports = router;