const driver = require('bigchaindb-driver');

let bdb = new driver.Connection('https://test.bigchaindb.com/api/v1/', {
    app_id: '47eb6097',
    app_key: 'aed47bfcc823c5d0c476fe8154571e1f'
});


module.exports = bdb;
