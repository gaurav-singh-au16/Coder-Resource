const express = require("express")
const router = express.Router()

router.use(express.urlencoded({extended:false}))

router.get("/askQuestion", (req, res) => {
    console.log("askQuestion Page Started")
    res.render("askQuestion")
})

router.post("/askQuestion", (req, res) => {
    console.log(req.body)
    res.send(req.body)
    
})

module.exports = router