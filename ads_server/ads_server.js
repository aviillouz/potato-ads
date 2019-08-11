const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())


var db = require('./mysql_client')


app.post('/ad', (req, res) => {
	console.log(req.body)
	var body = req.body;

	db.query(`insert into potato.ads (role, description) values ("${body.role}", "${body.description}");`);
	res.send('add new ad');
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))