const express=require('express')
const User=require('../model/user')
const Task=require('../model/task')

const router=new express.Router()

router.get('/tasks/:owner',async (req, res)=>{
    //res.send("Read User")
    const ownerId=req.params.owner
    try{
        const tasks=await Task.find({ owner : ownerId})

        // Get Owner Details from task 
        const theTask=await Task.findOne({ owner : ownerId })
        await theTask.populate({
                    path:"owner"
                }).execPopulate()
        console.log(theTask)

        res.status(200).send({tasks, owner : theTask.owner})
    }catch(error){
        res.status(400).send(error)
    }
})

router.post('/tasks',async (req, res)=>{
    console.log(req.body)
    try{
        const theUser=await User.findById(req.body.owner)
        if(!theUser){
            return res.status(400).send({ error: 'Invalid owner!' })    
        }
        const task=new Task(req.body)
        await task.save()
        //res.send("Post User")
        res.status(201).send(task)
    }catch(error){
        res.status(400).send(error)
    }
})

router.put('/tasks/:id',async (req, res)=>{
    //res.send("Put User")
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try{
        const id=req.params.id
        const task=await Task.findById(id)
        updates.forEach((update) => user[update] = req.body[update])
        await task.save()
        res.status(200).send(task)
    }catch(error){
        res.status(400).send(error)
    }
})

router.delete('/tasks/:id',async (req, res)=>{
    //res.send("Delete User")
    try{
        const id=req.params.id
        const task=await Task.findById(id)
        await task.delete()
        res.status(200).send(task)
    }catch(error){  
        res.status(400).send(error)
    }
})

module.exports=router