var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("uiiiiiii");
  console.log(req.query);
  res.render('thankyou', { fullName: req.query.fullName ,title:"thankyou",ip:req.query.ip});
});

module.exports = router;
