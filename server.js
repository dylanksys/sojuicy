var express = require ('express');
var home = require('../routers/home');
var butterapi = require('../routers/butterapi');

var app = express();

app.use('/', home);
app.use('/api', butterapi);

app.listen(1337, function () {
  console.log('myapp listening on port 1337');
};
