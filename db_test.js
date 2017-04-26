var mysql  = require('mysql');
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


var record= { firstname: 'Mukesh', lastname: 'Kumar', email: 'abc@domain.com' };

dbconn.query('INSERT INTO users SET ?', record, function(err,res){
  if(err) throw err;

  console.log('Last record insert id:', res.insertId);
});

dbconn.query('SELECT * FROM users',function(err, records){
  if(err) throw err;

  console.log('Data received from Db:n');
  console.log(records);
});

dbconn.query('UPDATE users SET email = ? WHERE id = ?', ['new@domain.com', 3], function(err, result){
  if(err) throw err;

  console.log('UPDATE Record Updated ' + result.changedRows + ' rows');
});

dbconn.query('DELETE FROM users WHERE id = ?', [4], function(err, result){
  if(err) throw err;

  console.log('DELETE Record Updated ' + result.affectedRows + ' rows');
});


dbconn.end(function(err) {
  // Function to close database connection
});
