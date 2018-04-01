const api = module.exports = require('express').Router()
const callStampMethod = require('./callStampMethod');
const callReceiptMethod = require('./callReceiptMethod');

api
  .get('/express-test', (req, res) => res.send({express: 'working!'})) //demo route to prove api is working
  .use('/callStampMethod', callStampMethod)
  .use('/callReceiptMethod', callReceiptMethod)
// No routes matched? 404.
api.use((req, res) => res.status(404).end())
