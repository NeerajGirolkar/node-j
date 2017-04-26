var db = require('./db.js');

function select(query) {
   db.query(query, function(err, records) {
     if(err) throw err;
     console.log('Data received from DB');
     console.log(records);
   });
};

function insert(record) {
  db.query('INSERT INTO users SET ?', record, function(err,res) {
    if(err) throw err;
    console.log('Last record insert id:', res.insertId);
  });
};

function remove(id) {
  db.query('DELETE FROM users WHERE id = ?', id, function(err, result) {
    if(err) throw err;
    console.log('DELETE Record Updated ' + result.affectedRows + ' rows');
  });
};

function update(query) {
  db.query(query, function(err, result) {
    if(err) throw err;
    console.log('UPDATE Record Updated ' + result.changedRows + ' rows');
  });
};

function closeDBConnection() {
  db.end(function(err) {
     console.log('Closing DB connection!');
  });
};

module.exports.select = select;
module.exports.insert = insert;
module.exports.remove = remove;
module.exports.update = update;
module.exports.closeDBConnection = closeDBConnection;

// Tests
// select('SELECT * FROM users;');
// var record = { firstname: 'Mahesh', lastname: 'Modak', email: 'mahesh@gmail.com'};
// insert(record);
// remove(9);
// update('UPDATE users SET email = \'mmodak@gmail.com\' WHERE firstname = \'Mahesh\'');
// closeDBConnection();
