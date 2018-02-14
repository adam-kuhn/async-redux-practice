const express = require('express')
const request = require('superagent')
const bodyParser = require('body-parser')

const router = express.Router()

router.use(bodyParser.json())

router.get('/comic/:comic', (req, res) => {
  request
    .get(`http://xkcd.com/${req.params.comic}/info.0.json`)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        console.log(result.body.data)
        res.json({})
      }
    }
    )
})

