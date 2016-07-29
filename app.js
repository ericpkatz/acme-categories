var express = require('express');
var swig = require('swig');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var DB = require('./db');
swig.setDefaults({cache: false});

var app = express();

app.use(express.static(path.join(__dirname, '/node_modules')));

app.use(bodyParser.urlencoded({extended: true }));
app.use(methodOverride('_method'));

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.get('/', function(req, res){
  res.render('index', { categories : DB.categories() });
});

app.use('/categories', require('./routes/categories'));


app.listen(process.env.PORT, function(){
  console.log('listening on ' + process.env.PORT);
});
