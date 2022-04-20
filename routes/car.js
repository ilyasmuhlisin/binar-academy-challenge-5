var express = require("express");
var router = express.Router();
const CarControl = require("../controller/carControl");

/* GET home page. */

router.get("/", CarControl.getAllCars);
router.post("/create", CarControl.addCars);
router.put("/update/:id", CarControl.updateCars);
router.delete("/:id", CarControl.deleteCars);

module.exports = router;
