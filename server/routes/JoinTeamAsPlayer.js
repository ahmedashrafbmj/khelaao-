const express = require("express");
const {getJoinTeamAsPlayer, upDateJoinTeamAsPlayer, deleteJoinTeamAsPlayer, postJointeamAsPlayer } = require("../controllers/JoinTeamAsPlayer");
const router = express.Router();
// router.route("/postJoinTeamAsPlayer").post(postJoinTeamAsPlayer)
router.route("/postJointeamAsPlayer").post(postJointeamAsPlayer)
router.route("/getJoinTeamAsPlayer").get(getJoinTeamAsPlayer)
router.route("/upDateJoinTeamAsPlayer").patch(upDateJoinTeamAsPlayer)
router.route("/deleteJoinTeamAsPlayer").delete(deleteJoinTeamAsPlayer)
module.exports = router;