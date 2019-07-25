const express = require('express')
const app = express()
const port = 3000

var db = require('./mysql_client')

app.post('/ad', (req, res) => {

	db.query('insert into potato.ads (role, description) values ("a", "b");');
	res.send('add new ad');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))