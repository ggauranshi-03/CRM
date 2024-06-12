const express = require("express");
const router = express.Router();
const audienceController = require("../controllers/audienceController");

router.post("/audiences", audienceController.createAudience);

module.exports = router;
