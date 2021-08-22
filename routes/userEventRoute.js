const express = require("express")

const router = express.Router()

const userEventController = require("../controllers/userEventController")

router.get("/user_event/:email", userEventController.getEventByEmail);

module.exports = router;