// apiRoutes.js
const express = require('express');
const router = express.Router();

// Define your database-related routes using the db object
module.exports = function (db) {
  // Route to get experiences
  router.get('/experiences', (req, res) => {
    // Perform a SELECT query to fetch experiences from the database
    db.query('SELECT * FROM experiences', (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        return res.status(500).send('Internal Server Error');
      }
      // Send the retrieved data as JSON response
      res.json(results);
    });
  });

  router.get('/projects', (req, res) => {
    // Perform a SELECT query to fetch projects from the database
    db.query('SELECT * FROM projects', (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        return res.status(500).send('Internal Server Error');
      }
      // Send the retrieved data as JSON response
      res.json(results);
    });
  });

  router.get('/educations', (req, res) => {
    // Perform a SELECT query to fetch educations from the database
    db.query('SELECT * FROM educations', (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        return res.status(500).send('Internal Server Error');
      }
      // Send the retrieved data as JSON response
      res.json(results);
    });
  });

  // Add more api-related routes as needed

  return router;
};





