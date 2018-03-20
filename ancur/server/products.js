const db = require('../db') //this is required
const Product = require('../db/models/product');
const Review = require('../db/models/review');

const Stampery = require('stampery');

const router = require('express').Router()

// router.get('/', function(req, res, next) {
//     Product.findAll({
//             include: [Review]
//         })
//         .then(result => {
//             res.status(200).send(result);
//         })
//         .catch(next);
// });

// router.get('/:id', function(req, res, next) {
//     Product.findOne({
//             where:{id:req.params.id},
//             include: [Review]
//         })
//         .then(result => {
//             res.status(200).send(result);
//         })
//         .catch(next);
// });

router.get('/:file', function(req, res,next) {
  var stampery = new Stampery('342463c4-3cbe-4d63-b1fe-48d7a9c13c3d');
  // reqs.params.file is coming from the file that is uploaded in app.js
  var h = stampery.hash(req.params.file + Math.random());
  res.status(200).send(stamp);
  stampery.stamp(h, function(err, stamp) {
  //   // sends the stamp to the frontend
    res.status(200).send(stamp);
  });
});

router.get('/:id', function(req, res, next) {
  res.status(200).send("hello");
  // console.log(req.params.id);
  stampery.getById(req.params.id, function(err, res) {
    // need to get this to work, but it doesn't change anything as of now
    if (err) {
      return console.error(err);
    }
    res.status(200).send(res);
    if (res) {
      res.status(200).send(stampery.prove(res.data.receipts));
      // res.status(200).send(res)
    }
  });
});

module.exports = router
