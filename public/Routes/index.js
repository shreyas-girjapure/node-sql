const router = require('express').Router();
const userMethods = require('../Controllers/user');
router.get('/', async (req,res)=>{
    console.log("got in all users");
    try {
        console.log("got in the try");
        let data = await userMethods.getAllUsers();           
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})
router.post('/user', async (req,res)=>{    
    try {
        userMethods.createUser(req.body);
        res.send('userCreated sucessfully');        
    } catch (error) {
        res.send(error.message);
    }
})
router.delete('/delete/:id', async (req,res)=>{
    try {
        await userMethods.deleteUser(req.params.id);
        res.send("User deleted Successfullly");
    } catch (error) {
        res.send(error.message);
    }
})

module.exports = router;