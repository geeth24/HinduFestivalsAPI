const express = require('express');
const app = express();
//const jsonServer = require('json-server');
const path = require('path');
const port = 3000


// ...

// You may want to mount JSON Server on a specific end-point, for example /api
// Optiona,l except if you want to have JSON Server default
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
//app.use('/api', jsonServer.router('db.json'));
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
