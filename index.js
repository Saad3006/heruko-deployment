const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World! welcome to first deployement')
})

app.listen(port || 3000)