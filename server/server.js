var path = require('path')
var express = require('express')

var redditRoutes = require('./reddit')
const xkcdRoutes = require('./xkcd')
var server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/reddit', redditRoutes)
// server.use('/api/v1/xkcd', xkcdRoutes)
// server.use('/api/v1/xkcd', xkcdRoutes)

module.exports = server
