const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

require('dotenv').config()

app.set('view engine', 'ejs')

//Middleware
app.use(express.urlencoded({ extended: true }))
app.use(cors())

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

  app.use(express.static('public'))
// static folders
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// Blog route
app.use('/blogs', require('./routes/blogsRoute'))

// APIs
app.use(`/${blogs_api}/blogs`, require('./api/blogs_api'))

// 404 page not found
app.use((req, res) => {
  res.status(404).render('404')
})
