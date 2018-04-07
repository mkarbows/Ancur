const api = module.exports = require('express').Router()
const callStampMethod = require('./callStampMethod');
const callProvingMethod = require('./callProvingMethod');

api
  .get('/express-test', (req, res) => res.send({express: 'working!'})) //demo route to prove api is working
  .use('/callStampMethod', callStampMethod)
  .use('/callProvingMethod', callProvingMethod)
// No routes matched? 404.
api.use((req, res) => res.status(404).end())
