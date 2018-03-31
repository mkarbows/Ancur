const express = require('express');
const app = express();
// const path = require("path");
const Stampery = require('stampery');

// app.get('/', (req, res) => res.send('Hello World!'))

var stampery = new Stampery('342463c4-3cbe-4d63-b1fe-48d7a9c13c3d');
app.get('/', function(req, res, next) {
  var stampery = new Stampery('342463c4-3cbe-4d63-b1fe-48d7a9c13c3d');
  const hash = stampery.hash('the piano has been drinking ' + Math.random());
  stampery.stamp(hash).then((stamp) => {
    // res.status(200).send(stamp);
    res.send(stamp);
    return console.log(stamp);
  }).catch((err) => {
    return console.error(err);
  });

});

// app.get('/', function(req, res, next) {
//   res.sendFile(path.join(__dirname+'index.html'));
// });

app.listen(3000, () => console.log('Example app listening on port 3000!'))
