const db = require('../db') //this is required
const Stampery = require('stampery');
const router = require('express').Router()

router.get('/:id', function(req, res, next) {
  var stampery = new Stampery('342463c4-3cbe-4d63-b1fe-48d7a9c13c3d');
  stampery.getById(req.params.id).then((stamp) => {
    res.status(200).send(stamp[0]);
  }).catch((err) => {
    res.status(200).send(err);
    return console.error(err);
  });

});



module.exports = router;
