const express = require("express");
const { postParticipate, getParticipate, upDateParticipate, deleteParticipate } = require("../controllers/participate");
const router = express.Router();
router.route("/postParticipate").post(postParticipate)
router.route("/getParticipate").get(getParticipate)
router.route("/upDateParticipate/:id").patch(upDateParticipate)
router.route("/deletParticipate/:id").delete(deleteParticipate)
module.exports = router;