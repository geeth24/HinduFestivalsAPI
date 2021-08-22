var express = require('express');
var jsonServer = require('json-server');

var server = express();
// ...

// You may want to mount JSON Server on a specific end-point, for example /api
// Optiona,l except if you want to have JSON Server defaults
server.use('/', jsonServer.defaults()); 
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
//server.use('/api', jsonServer.router('db.json'));

server.listen(3000);