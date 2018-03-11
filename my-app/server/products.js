const router = require('express').Router()
const Stampery = require('stampery');

router.get('/:file', function(req, res, next) {
  var stampery = new Stampery('342463c4-3cbe-4d63-b1fe-48d7a9c13c3d');
  // reqs.params.file is coming from the file that is uploaded in app.js
  var h = stampery.hash(req.params.file + Math.random());
  stampery.stamp(h, function(err, stamp) {
    // sends the stamp to the frontend
    res.status(200).send(stamp);
  });

});

/**
* Example for retrieving the receipts for a certain stamp at any time
* afterwards. It also verifies if the proof is valid and prints the result.
 */
router.get('/:id', function(req, res, next) {
  console.log(req.params.id);
  stampery.getById(req.params.id, function(err, res) {
    // console.log(req.params.id);
    // need to get this to work, but it doesn't change anything as of now
    if (err) {
      return console.error(err);
    }
    // console.log('here',res);
    res.status(200).send(res);
    if (res) {
      res.status(200).send(stampery.prove(res.data.receipts));
      // console.log("res.receipts", res.receipts);
      // res.status(200).send(res)
    }
  });
});


module.exports = router
