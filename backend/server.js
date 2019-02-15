const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const User = require('./User')
const axios = require('axios')

require('dotenv').config({ path: '/Users/chrispfaff/Projects/FingerRoll/.env' })

const app = express()
const API_PORT = 3001

const router = express.Router()

const dbRoute = `mongodb://${process.env.DB_USER}:${
  process.env.DB_PASSWORD
}@ds031601.mlab.com:31601/finger-roll`

mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
)

let db = mongoose.connection

db.once('open', () => console.log('connected to the database'))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', router)
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
router.use(logger('dev'))

router.post('/submit', (req, res) => {
  let body = req.body
  console.log(body.chris)
  res.end()
  // let user = new User({
  //   name: 'chris',
  //   password: 'helloworld',
  //   team: 'cavaliers'
  // })
  // user.save(err => {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log('Success')
  //   }
  // })
  // res.json(process.env.DB_PASSWORD)
})

router.get('/landing', async (req, res) => {
  let east = await axios
    .get('https://demo7799958.mockable.io/teams')
    .then(teams => {
      return teams.data
    })

  res.json(east)
  //use promise all with real data
})

router.get('/data', (req, res) => {
  User.find((err, data) => {
    if (err) {
      return res.json({ success: false, error: err })
    } else {
      res.json({ success: true, data: data })
    }
  })
})

app.listen(API_PORT, () => {
  console.log(`server is listening on ${API_PORT} `)
})
