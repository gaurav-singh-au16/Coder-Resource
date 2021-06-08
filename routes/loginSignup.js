const express = require("express")
const router = express.Router()

router.get("/loginSignup", (req, res) => {
    console.log("loginSignup Page Started")
    res.render("loginSignup")
})
router.post("/login", (req, res) => {
    
    
})
router.post("/signup", (req, res) => {
    
})


module.exports = router