const express = require("express");
const router = express.Router();

const getCakeInfo = require("../public/scripts/getCakeInfo");
const getFavCakes = require("../public/scripts/getFavCakes");

module.exports = (db) => {
  router.get("/", (req, res) => {
    // console.log("is this working");
    //value is pulled from front end name = "filter"
    const value = Number(req.query.filter);

    getCakeInfo(value)
      .then((result) => {
        const userID = req.cookies.user_id;
        const templateVars = { cakes: result, userID };
        return res.render("buyer-main-page", templateVars);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  });

  router.get("/routes/favs", (req, res) => {
    res.render("buyer-fav-page", templateVars);
  });

  return router;
};
