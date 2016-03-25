var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    pageTitle: 'SSS Reporting',
    message: 'This home page displays the SSS Architecture Reports'
  });
});

module.exports = router;
