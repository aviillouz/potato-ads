const express = require('express')
const app = express()
const port = 3000

app.post('/ad', (req, res) => res.send('add new ad'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))