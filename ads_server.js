const express = require('express')
const app = express()
const port = 3000

var db = require('./mysql_client')

app.post('/ad', (req, res) => {

	res.send('add new ad');
	db.query('select * from potato.ads');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))