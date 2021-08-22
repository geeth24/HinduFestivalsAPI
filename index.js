const express = require('express');
const app = express();
const jsonServer = require('json-server');
const path = require('path');
const router = express.Router();
// ...

// You may want to mount JSON Server on a specific end-point, for example /api
// Optiona,l except if you want to have JSON Server default
router.get('/',function(req,res){
    res.send("Up")
  });
  
router.use('/api', jsonServer.router('db.json'));

app.use('/', router);
app.listen(process.env.port || 3000);
