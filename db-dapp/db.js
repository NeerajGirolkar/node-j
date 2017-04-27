var mysql  = require('mysql');

var dbconn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'subsidy'
});

dbconn.connect(function(err){
  if(err) {
    console.log('Database connection error');
  } else {
    console.log('Database connection successful');
  }
});

module.exports = dbconn;
