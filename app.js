const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const redis = require('redis');

//set port
const port = 3000;

//Init app
const app = express();

//View engine
app.engine('handlebars', exphs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//bodt-parser
app.use(bodyParser.json());
app.unsubscribe(bodyParser.urlencoded({extended: false}));

//methodOverride
app.use(methodOverride('_method'));

app.get('/', function(req,res, net){
    res.render('searchusers');
});

app.listen(port, function() {
    console.log(`server started on port ${port}`)
})