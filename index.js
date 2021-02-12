const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Use `node index.js` in terminal to start listening, or `nodemon index` now that nodemon package is installed for development environment

app.listen(PORT, () => console.log('Server listening on port ' + PORT ));