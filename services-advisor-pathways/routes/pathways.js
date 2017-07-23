var express = require('express');
var Service = require('../models/service');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
  // TODO: maybe this should be required?
  var keywords = req.body.keywords;

  
  // console.log(req.body.keywords);
  res.send(req.body.keywords);
});

module.exports = router;
