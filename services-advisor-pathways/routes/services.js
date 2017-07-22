var express = require('express');
var Service = require('../models/service');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Service.findOne({}, function(err, s){
    res.send(s);
  })
});

module.exports = router;
