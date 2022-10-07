const express = require("express");
const { postNeedPlayerForTeam, getNeedPlayerForTeam, deleteNeedPlayerForTeam, upDateNeedPlayerForTeam } = require("../controllers/NeedPlayerForTeam");
const router = express.Router();
router.route("/postNeedPlayerForTeam").post(postNeedPlayerForTeam)
router.route("/getNeedPlayerForTeam").get(getNeedPlayerForTeam)
router.route("/deleteNeedPlayerForTeam/:id").delete(deleteNeedPlayerForTeam)
router.route("/upDateNeedPlayerForTeam/:id").patch(upDateNeedPlayerForTeam)
module.exports = router;

