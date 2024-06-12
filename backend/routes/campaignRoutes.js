const express = require("express");
const router = express.Router();
const campaignController = require("../controllers/campaignController");

router.post("/campaigns", campaignController.createCampaign);

module.exports = router;
