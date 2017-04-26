var mysql  = require('mysql');

function connect(query){
var dbconn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'test'
});


dbconn.connect(function(err){
  if(err){
    console.log('Database connection error');
  }else{
    console.log('Database connection successful');
  }
});

	dbconn.query(query,function(err, records){
  	if(err) throw err;
  	console.log('Data received from Db:n');
  	console.log(records);
	});

dbconn.end(function(err) {
  // Function to close database connection
});
};
connect('SELECT * FROM users;');
