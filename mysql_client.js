var mysql = require('mysql');

console.log('3')
var connection = mysql.createConnection({
	host: "localhost",
	port: "3306",
	user: "root",
	password: "1234"
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
});

module.exports = {
	query: function (sql) {
		connection.query(sql, function (err, result) {
			if (err) throw err;
			console.log("Result: " + result);
		});
	}
}; 

