var path = require('path')
var express = require('express')
var server = express()
const cors = require('cors')

var redditRoutes = require('./reddit')
const xkcdRoutes = require('./xkcd')

server.use(express.static(path.join(__dirname, '../public')))
server.use(cors({origin: 'http://localhost:8080'}))

server.use('/api/v1/reddit', redditRoutes)
server.use('/api/v1/xkcd', xkcdRoutes)
// server.use('/api/v1/xkcd', xkcdRoutes)

module.exports = server
