const express = require('express');
const path = require('path');

const app = express();

// import db connection
const db = require('./models');

// init middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname + '/public')));

// serve front end
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// import and define routes
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(`App listening on port ${PORT}`);
  });
});
