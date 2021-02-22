const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const passport = require('passport')
const cookieParser = require('cookie-parser')

require('dotenv').config()

//Middleware
app.use(express.urlencoded({ extended: true } ))
app.use(express.json())
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))
app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())
require('./controllers/passport')(passport)
// ---------------------------- END OF MIDDLEWARE --------------------------------

//process.env
const port = process.env.PORT || 8000
const dbURL = process.env.mongoDBURL
const blogs_api = process.env.blogs_api
// listining to port
app.listen(port, () => console.log(`Listing to port ${port}...`))

// MongoDB Database Connect
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((res) => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err))

// Blog route API
app.use(`/${blogs_api}/blogs`, require('./routes/blogsRoute'))
app.use('/user', require('./routes/userRoute'))

if (process.env.NODE_ENV === 'production')  {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// 404 page not found
app.use((req, res) => {
  res.status(404).render('404')
})
