const dotenv = require("dotenv");
dotenv.config({path:'./.env'});

const mysql = require("mysql2");

exports.start = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password:process.env.DATABASE_PWD,
  database : process.env.DATABASE
});


