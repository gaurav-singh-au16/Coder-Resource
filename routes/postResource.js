const express = require("express")
const router = express.Router()
const ResourceModel = require("../models/resource")

router.use(express.urlencoded({extended:false}))

router.get("/postResource", (req, res) => {
    console.log("postResource Page Started")
    res.render("postResource")
})

router.post("/postResource", (req, res) => {
    console.log(req.body)
    
    
})

module.exports = router