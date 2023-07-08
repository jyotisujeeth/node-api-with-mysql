const mysql = require('mysql2');
const express= require('express');
const Router = express.Router();
const mysqlConnection = require('./conection');

Router.get("/", (req, res) => {
    mysqlConnection.query("SELECT * FROM people", (err, rows, fields) => {
        if(!err) {
            res.send (rows);

        }
        else {
            console.log(err);
        }
    });
});

module.exports = Router;