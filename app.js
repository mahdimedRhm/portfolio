const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 3000; // Set the port number


// Create a MySQL database connection
const db = mysql.createConnection({
  host: 'localhost', // Replace with your database host
  user: 'root', // Replace with your database username
  password: 'Nycun1999', // Replace with your database password
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

// Make the database connection available throughout your application
global.db = db;

// Middleware for static assets
app.use(express.static('public'));

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', __dirname + '/views'); // Specify the views directory


app.get('/', (req, res) => {
  res.render('index'); // Render the index.ejs template
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/projects', (req, res) => {
    // Perform a SELECT query to fetch projects from the database
    db.query('SELECT * FROM projects', (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        return res.status(500).send('Internal Server Error');
      }
      // Render a template and pass the retrieved data to it
      res.render('projects', { projects: results });
    });
});