var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "db",
	port: "3306",
	user: "root",
	password: "1234"
});

setTimeout(initServer, 5000)

function initServer() {
		connection.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
	});
}


module.exports = {
	query: function (sql) {
		connection.query(sql, function (err, result) {
			if (err) throw err;
			console.log("Result: " + result);
		});
	}
}; 

