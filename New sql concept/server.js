const mysql = require('mysql2');
const express = require('express');
const bodyparser = require('body-parser');
const mysqlConnection = require("./conection");
const PeopleRoutes = require("./people");





var app = express();
app.use(bodyparser.json());

app.use("/people", PeopleRoutes);

    app.listen(4000);