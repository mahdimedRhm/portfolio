const express = require('express');

const app = express();
const port = process.env.PORT || 3000; // Set the port number


const db = require('./db'); // Require the db.js module

// Middleware for static assets
app.use(express.static('public'));

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', __dirname + '/views'); // Specify the views directory


app.get('/', (req, res) => {
  res.render('index'); // Render the index.ejs template
});

app.use((req, res, next) => {
  res.status(404).send("Sorry, the page you're looking for doesn't exist. Stop changing urls please this web site is not secure enough");
});

const apiRoutes = require('./apiRoutes');

// Use the apiRoutes for a specific prefix (e.g., /api)
app.use('/api', apiRoutes(db));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

