const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const routes = require('./src/routes')

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'contextDb'
})

connection.connect()

const port = process.env.PORT || 8080

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(routes(connection))

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`)
})
