var crud_operations = require('./crud.js');

crud_operations.select('SELECT * FROM users;');
crud_operations.closeDBConnection();
