const api = module.exports = require('express').Router()
const callStampMethod = require('./callStampMethod');
const callProvingMethod = require('./callProvingMethod');
const getReceipts = require('./getReceipts');

api
  .get('/express-test', (req, res) => res.send({express: 'working!'})) //demo route to prove api is working
  .use('/callStampMethod', callStampMethod)
  .use('/callProvingMethod', callProvingMethod)
  .use('/getReceipts', getReceipts)
api.use((req, res) => res.status(404).end())
