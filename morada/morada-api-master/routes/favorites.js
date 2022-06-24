const express = require("express");
const router = express.Router();
const {create, getFavoriteByUser, deleteone} = require('./../controllers/favoritesCtrl')


router.post("/", create);

router.get("/:id", getFavoriteByUser);
router.delete("/:id", deleteone);

module.exports = router;
