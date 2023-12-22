const express = require('express')
var bodyParser = require('body-parser')
const createTest = require('./ord')
var cors = require('cors')
const app = express()
const port = 8000

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.post('/', async (req, res) => {
    const { text, recAddr } = req.body;
    const order = await createTest(text, recAddr);
    return res.json(order)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})