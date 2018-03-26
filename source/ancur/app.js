const express = require('express')
const app = express()

const Stampery = require('stampery');

// app.get('/', (req, res) => res.send('Hello World!'))

var stampery = new Stampery('342463c4-3cbe-4d63-b1fe-48d7a9c13c3d');
app.get('/', function(req, res, next) {
  // res.send('hihi')
  var stampery = new Stampery('342463c4-3cbe-4d63-b1fe-48d7a9c13c3d');
  // reqs.params.file is coming from the file that is uploaded in app.js
  const hash = stampery.hash('the piano has been drinking ' + Math.random());
  stampery.stamp(hash).then((stamp) => {
    // res.status(200).send(stamp);
    res.send(stamp);
    return console.log(stamp);
  }).catch((err) => {
    return console.error(err);
  });

});

// const hash = stampery.hash('the piano has been drinking ' + Math.random());
// stampery.stamp(hash).then((stamp) => {
//   return console.log(stamp);
// }).catch((err) => {
//   return console.error(err);
// });



app.listen(3000, () => console.log('Example app listening on port 3000!'))
