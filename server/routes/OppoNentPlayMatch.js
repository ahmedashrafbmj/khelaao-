const express = require("express");
const { postOpponentPlayMatch, getOpponentPlayMatch, upDateOpponentPlayMatch, deleteOpponentPlayMatch } = require("../controllers/OppoNentPlayMatch");
const router = express.Router();
router.route("/postOpponentPlayMatch").post(postOpponentPlayMatch)
router.route("/getOpponentPlayMatch").get(getOpponentPlayMatch)
router.route("/upDateOpponentPlayMatch/:id").patch(upDateOpponentPlayMatch)
router.route("/deletOpponentPlayMatch/:id").delete(deleteOpponentPlayMatch)
module.exports = router;