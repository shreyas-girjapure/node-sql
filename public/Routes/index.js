const router = require('express').Router();
const createUser = require('../Controllers/user')
router.get('/',(req,res)=>{
    res.send("hello world")
})
router.post('/user',async (req,res)=>{
    console.log(req.body);
    createUser(req.body);
    res.send('userCreated sucessfully');
})
module.exports = router;