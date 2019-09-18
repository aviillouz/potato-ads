const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
app.use(bodyParser.urlencoded({
	extended: true
}))

app.use(bodyParser.json())
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

var db = require('./mysql_client')
app.get('/ads', (req, res) => {
	ads = db.connection.query(`select id, role, description, created_at, updated_at from potato.ads;`, function (err, result, fields) {
		if (err) throw err;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(result));
	});

})

app.post('/ad', (req, res) => {
	console.log(req.body)
	var body = req.body;

	db.query(`insert into potato.ads (role, description) values ("${body.role}", "${body.description}");`);
	res.send('add new ad');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))