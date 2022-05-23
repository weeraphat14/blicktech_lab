const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Demo API v1.0')
})
app.get('/cal',require('./routes/calculate'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})