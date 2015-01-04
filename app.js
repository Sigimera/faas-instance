var express       = require('express');
var path          = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

var partials  = require('./routes/partials');
var routes    = require('./routes');

app.get('/', routes.index);

app.get('/partials/:name', partials.partials);
app.get('*', routes.index);

app.listen(3000);
