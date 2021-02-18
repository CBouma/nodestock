const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 5000;
const request = require('request');

// API Key from https://iexcloud.io/ pk_0d853cf8f1e646cab0a0580dae9eb4ba
// Create Call API function
function callAPI(finishedAPI){
request ('https://cloud.iexapis.com/stable/stock/fb/quote?token=pk_0d853cf8f1e646cab0a0580dae9eb4ba', {json:true}, (err, res, body) => {
    if (err) {return console.log(err)};
    if (res.statusCode === 200){
        //console.log(body);
        finishedAPI(body);
    };
});
};

// Configuring handlebars middleware as my view engine
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');


// Set handlebar route
app.get('/', (req, res) => {
        callAPI(function(doneAPI) {
            res.render('home', {
                stock: doneAPI
            });
        });
    });

// About Page Route
app.get('/about.html', (req, res) => {
    res.render('about');
});

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Use `node index.js` in terminal to start listening, or `nodemon index` now that nodemon package is installed for development environment

app.listen(PORT, () => console.log('Server listening on port ' + PORT ));