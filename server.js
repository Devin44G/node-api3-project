const express = require('express');
const usersRouter = require('./users/userRouter.js');

const server = express();

server.use(logger);
server.use(express.json());
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

// LOGGER MIDDLEWARE
function logger(req, res, next) {
  const method = req.method;
  const endpoint = req.originalUrl;
  let date = new Date();

  console.log(`${method} to ${endpoint} at ${date}`);
  next();
}



module.exports = server;
