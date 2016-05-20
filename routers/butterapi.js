var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/butters', function(req, res) {
  res.send('Path: /butters');
};

router.get('/fat', function(req, res) {
  res.send('Path: /fat');
};

module.exports = router;
