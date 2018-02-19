const db = require('../db') //this is required

// const Product = require('../db/models/product');
// const Review = require('../db/models/review');

const router = require('express').Router()
const Stampery = require('stampery');

router.get('/:file', function(req, res, next) {
  var stampery = new Stampery('342463c4-3cbe-4d63-b1fe-48d7a9c13c3d');
  // reqs.params.file is coming from the file that is uploaded in app.js
  var h = stampery.hash(req.params.file + Math.random());
  console.log(res.data);
  stampery.stamp(h, function(err, stamp) {
    // sends the stamp to the frontend
    res.status(200).send(stamp);
  });

    // this is the original stuff to call the database:
    // Product.findAll({
    //         include: [Review]
    //     })
    //     .then(result => {
    //         res.status(200).send(result);
    //     })
    //     .catch(next);
});

/**
* Example for retrieving the receipts for a certain stamp at any time
* afterwards. It also verifies if the proof is valid and prints the result.
 */
router.get('/:receipt', function(req, res, next) {
  stampery.getById(req.params.receipt, function(err, res) {
    // need to get this to work, but it doesn't change anything as of now
    // if (err) {
    //   return console.error(err);
    // }
    // console.log(res);
    // res.status(200).send(res);
    // if (res) {
    //   return console.log('Valid: ', stampery.prove(res.receipts));
    // }
  });
});

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

module.exports = router
