const User = require('../models/user');
const passport = require('passport')
const localStrategy = require('passport-local').Strategy;
const jwtStrategy = require('passport-jwt').Strategy;

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['access_token'];
  }
  return token;
}

module.exports = function (passport) {

  // authorization (access control)
  passport.use(new jwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: 'NoobCoder'
  }, (payload, done) => {
      User.findById({ _id: payload.sub }, (err, user) => {
        if (err) throw done(err, false);
        if (user) return done(null, user);
        else return done(null, false);
      } )
  }))
   
  // authenticated username and password (login)
  passport.use(new localStrategy((username, password, done) => {
      User.findOne({ username }, (err, user) => {
        if (err) throw err;
        // if no user exists
        if (!user) return done(null, false);
        user.comparePassword(password, done);
      })
    })
  )
}


// passport.serializeUser((user, cb) => {
//   cb(null, user.id);
// })

// passport.deserializeUser((id, cb) => {
//   User.findOne({ _id: id }, (err, user) => {
//     const userInfo = {
//       username: user.username,
//     }
//     cb(err, user);
//   })
// })
