const mysql = require('mysql2');
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user:   'root',
    password: 'myself&me',
    database : "newdb",
multipleStatements: true
    });

    mysqlConnection.connect((err)=> {
        if(!err)
        {
            console.log("Connection established");
        }
        else {
            console.log("Connection error");
        }
    });

    module.exports = mysqlConnection;