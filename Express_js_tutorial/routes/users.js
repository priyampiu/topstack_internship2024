const express = require('express')
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("users list")
})
router.get("/new",(req,res)=>{
    res.send("users new form")
})
router.post("/",(req,res)=>{
    res.send("create user")
})

router.route("/id").get((req,res)=>{
    const ID=req.params.id;
    res.send('get users with id:${ID}');
}).put((req,res)=>{
    const ID=req.params.id;
    res.send('update users with id:${ID}');
}).delete((req,res)=>{
    const ID=req.params.id;
    res.send('delete users with id:${ID}');
})
module.exports = router

