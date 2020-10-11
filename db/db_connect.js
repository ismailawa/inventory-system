const mysql = require('mysql2');

const connection = ()=> {
    let connection = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        database: "inventorydb",
    });

    return connection;
};


module.exports = connection;