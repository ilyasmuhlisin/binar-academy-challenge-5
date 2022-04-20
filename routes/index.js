var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get("/", function (req, res, next) {
  res.render("cars/index");
});
router.get("/cars/create", function (req, res, next) {
  res.render("cars/createCar");
});
router.get("/cars/update", function (req, res, next) {
  res.render("cars/updateCar");
});
router.use("/cars", require('./car'));

module.exports = router;
