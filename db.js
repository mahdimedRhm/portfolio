// db.js
const mysql = require('mysql2');

// Create a MySQL database connection
const db = mysql.createConnection({
  host: 'localhost', // Replace with your database host
  user: 'root', // Replace with your database username
  password: 'password', // Replace with your database password
  database: 'portfolio', // Replace with your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

module.exports = db;