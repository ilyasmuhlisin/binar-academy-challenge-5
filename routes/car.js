var express = require("express");
var router = express.Router();
const CarControl = require("../controller/carControl");

/* GET home page. */
router.get("/", CarControl.getAllCars);
router.post("/", CarControl.addCars);
router.put("/:id", CarControl.updateCars);
router.delete("/:id", CarControl.deleteCars);

module.exports = router;
