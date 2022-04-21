const { Cars } = require("../models");

module.exports = class {
  static addCars(req, res, next) {
    Cars.create({
      nama: req.body.nama,
      sewa: req.body.sewa,
      ukuran: req.body.ukuran,
      foto: req.body.foto,
    })
      .then((result) => {
        res.render("cars/createCar", { result });
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }

  static getAllCars(req, res, next) {
    Cars.findAll()
      .then((result) => {
        res.render("cars/index", { ListCars: result });
        // res.status(200).send(
        //   {data : result}
        // )
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
  static editCars(req, res, next) {
    const id = req.params.id;
    Cars.findByPk(id)
      .then((result) => {
        console.log(result)
          res.render("cars/updateCar",{data:result});
          // res.status(200).send(
          //   {data : result}
          // )
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
  static updateCars(req, res, next) {
    const id = req.params.id;
    Cars.update(req.body, {
      where: { id: id },
    })
      .then((result) => {
        if (result == 1) {
          res.redirect(`${id}`);
          // res.status(200).send(
          //   {data : result}
          // )
        } else {
          res.send({
            message: `cannot update id=${id}`,
          });
        }
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }

  static deleteCars(req, res, next) {
    const id = req.params.id;
    Cars.destroy({
      where: { id: id },
    })
      .then((result) => {
        if (result == 1) {
          res.redirect("/");
        } else {
          res.send({
            message: `cannot delete id=${id}`,
          });
        }
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
};
