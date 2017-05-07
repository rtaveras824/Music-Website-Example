var express = require('express'),
	expressHandlebars = require('express-handlebars'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	expressSession = require('express-session'),
	jqueryUploadMiddleware = require('jquery-file-upload-middleware');

var PORT = process.env.PORT || 3000;
var app = express();

var handlebars = expressHandlebars.create({
	defaultLayout: 'main',
	helpers: {
		section: function(name, options) {
			if(!this._sections) this._section = {};
			this._sections[name] = options.fn(this);
			return null
		}
	}
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/admin', function(req, res) {
	
});

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/news', function(req, res) {

});

app.get('/bio', function(req, res) {

});

app.get('/media', function(req, res) {

});

app.get('/tour', function(req, res) {

});

app.get('/book', function(req, res) {

});

app.get('/store', function(req, res) {

});

app.use(function(req, res, next) {
	res.render('404');
});

app.listen(PORT, function(err) {
	console.log('Server listening on port: ' + PORT + ', Ctrl+C to quit.');
});