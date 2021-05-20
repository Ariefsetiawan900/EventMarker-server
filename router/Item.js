const router = require("express").Router();
const item = require("../controllers/Item");

router.post("/createEvent", item.CreateEvent);
router.get("/getEvent", item.GetEvent);

module.exports =router
