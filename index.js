const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 5000;

// Configuring handlebars middleware as my view engine
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

// Set handlebar route
app.get('/', (req, res) => {
        res.render('home');
    });

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Use `node index.js` in terminal to start listening, or `nodemon index` now that nodemon package is installed for development environment

app.listen(PORT, () => console.log('Server listening on port ' + PORT ));