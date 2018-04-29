const router = require('express').Router()
const Stampery = require('stampery');

router.get('/:input', function(req, res, next) {
  console.log(req.params.input);
  var stampery = new Stampery('342463c4-3cbe-4d63-b1fe-48d7a9c13c3d');
  const hash = stampery.hash(req.params.input + Math.random());
  // console.log(hash);
  stampery.stamp(hash).then((stamp) => {
    res.status(200).send(stamp);
    return console.log(stamp);
  }).catch((err) => {
    return console.log(err);
  });
});

module.exports = router
