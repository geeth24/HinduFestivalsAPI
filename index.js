const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5050;

server.use(middlewares);
server.use(router);


server.exports = (req, res) => {
    res.status(404).json({ message: 'Not Found' });
  };

  server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})