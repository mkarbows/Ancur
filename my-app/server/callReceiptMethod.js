const db = require('../db') //this is required
const Stampery = require('stampery');

const router = require('express').Router()


router.get('/:id', function(req, res, next) {
  var stampery = new Stampery('342463c4-3cbe-4d63-b1fe-48d7a9c13c3d');
  console.log(req.params.id);
  stampery.getById(req.params.id).then((stamp) => {
    // res.status(200).send(stampery.prove(stamp.receipts));
     // return console.log('Valid: ', stampery.prove(stamp.receipts));
  }).catch((err) => {
    return console.error(err);
  });
  // stampery.getById(req.params.id, function(err, res) {
    // console.log(req.params.id);
    // need to get this to work, but it doesn't change anything as of now
    // if (err) {
    //   return console.error(err);
    // }
    // console.log('here',res);
    // res.status(200).send(res);
    // if (res) {
      // res.status(200).send(stampery.prove(res.data.receipts));
      // console.log("res.receipts", res.receipts);
      // res.status(200).send(res)
    // }
  // });
});



module.exports = router;
