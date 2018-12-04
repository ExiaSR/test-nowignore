const express = require('express')
const root = require('./routes/index')
const b = require('./routes/b')

const app = express();
const port = process.env.PORT || 3000

app.use('/', root)
app.use('/b', b)

app.listen(port, (err) => {
  if (err) throw err
  console.log(`Listening at http://localhost:${port}`)
})