const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    console.log("Home Page Started")
    res.render("home")
})

module.exports = router