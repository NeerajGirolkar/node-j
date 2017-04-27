var db = require('./db.js');

function select(query) {
   db.query(query, function(err, records) {
     if(err) throw err;
     console.log('Data received from DB');
     console.log(records);
   });
};

function insert(table_name, record) {
  db.query('INSERT INTO ' + table_name + ' SET ?', record, function(err,res) {
    if(err) throw err;
    console.log(res.affectedRows + ' records inserted!');
  });
};

function remove_using_eth_address(table_name, eth_address) {
  db.query('DELETE FROM ' + table_name + ' WHERE ETH_ACCOUNT_ADDRESS = ?', eth_address, function(err, result) {
    if(err) throw err;
    console.log('DELETE Record Updated ' + result.affectedRows + ' rows');
  });
};

function update_government(state, eth_address) {
  db.query('UPDATE government SET STATE_NAME = ? WHERE ETH_ACCOUNT_ADDRESS = ?', [state, eth_address], function(err, result) {
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
module.exports.remove_using_eth_address = remove_using_eth_address;
module.exports.update_government = update_government;
module.exports.closeDBConnection = closeDBConnection;
