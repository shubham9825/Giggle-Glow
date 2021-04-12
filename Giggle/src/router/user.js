const express=require('express')
const User=require('../model/user')

const  router=new express.Router()
  
router.get('/users/:id',async (req, res)=>{
    //res.send("Read User")
    const _id=req.params.id
    try{
        const user=await User.findById(_id)
        
        await user.populate({  //we use populate mathod 
            path:"tasks"
        }).execPopulate()

        res.status(200).send({user, tasks:user.tasks})
    }catch(error){
        res.status(400).send(error)
    }
})

router.post('/users',async (req, res)=>{
    console.log(req.body)
    try{
        const user=new User(req.body)
        await user.save()
        //res.send("Post User")
        res.status(201).send(user)
    }catch(error){
        res.status(400).send(error)
    }
})

router.put('/users/:id',async (req, res)=>{
    //res.send("Put User")
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try{
        const id=req.params.id
        const user=await User.findById(id)
        updates.forEach((update) => user[update] = req.body[update])
        await user.save()
        res.status(200).send(user)
    }catch(error){
        res.status(400).send(error)
    }
})

router.delete('/users/:id',async (req, res)=>{
    //res.send("Delete User")
    try{
        const id=req.params.id
        const user=await User.findById(id)
        await user.delete()
        res.status(200).send(user)
    }catch(error){  
        res.status(400).send(error)
    }
})

 module.exports=router