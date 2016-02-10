var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/slevin', function(req, res) {
  res.render('me', { title: 'Slevin' });
});

router.get('/yanfang', function(req, res) {
  res.render('dad', { title: 'Yanfang' });
});

router.get('/donghua', function(req, res) {
  res.render('mom', { title: 'Donghua' });
});


module.exports = router;
