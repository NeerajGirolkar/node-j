var crud_operations = require('./crud.js');

crud_operations.select('SELECT * FROM government;');
crud_operations.select('SELECT * FROM payments;');
crud_operations.select('SELECT * FROM recipients;');
crud_operations.select('SELECT * FROM subsidies;');

var record =  {ETH_ACCOUNT_ADDRESS: '0xa2c9392936e5019d93d1f7bf9fd3d5f4333c033g', STATE_NAME: 'Kashmir', COUNTRY: 'India'};
crud_operations.insert('government', record);
crud_operations.select('SELECT * FROM government;');

crud_operations.update_government('Himachal','0xa2c9392936e5019d93d1f7bf9fd3d5f4333c033g');
crud_operations.select('SELECT * FROM government;');

crud_operations.remove_using_eth_address('government', '0xa2c9392936e5019d93d1f7bf9fd3d5f4333c033g');

crud_operations.closeDBConnection();
