var express = require('express');
var router = express.Router();
var db = require('../mongoUtil');
var ObjectId = require('mongodb').ObjectID;

router.get('/:id', function(req, res, next) {
  db.get().collection('tags').find({'_id': new ObjectId(req.params.id)}).toArray(function(error, documents) {
    if (error) throw error;
    res.send(documents);
  });
});

module.exports = router;
