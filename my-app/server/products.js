const db = require('../db') //this is required
const Product = require('../db/models/product');
const Review = require('../db/models/review');

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

    // this is the original stuff to call the database:
    // Product.findAll({
    //         include: [Review]
    //     })
    //     .then(result => {
    //         res.status(200).send(result);
    //     })
    //     .catch(next);
});

router.get('/:id', function(req, res, next) {
    Product.findOne({
            where:{id:req.params.id},
            include: [Review]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

module.exports = router
