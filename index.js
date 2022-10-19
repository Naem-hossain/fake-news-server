// const { request } = require('express')
const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.port || 5000


const categories = require('./data/Categories.json')
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(` App listening on port ${port}`)
})