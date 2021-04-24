const express = require('express')
const FormUp = require('../model/formup')
const Inquire = require('../model/inqurie')

const router = new express.Router

router.get('/formups/:owner',async (req,res)=>{

    //res.send("Read User")
    const ownerId=req.params.owner
    console.log(ownerId)
    try{
        const formups = await FormUp.find({owner:ownerId})
        console.log(formups)
         // Get Owner Details from task 
         const theFormup=await FormUp.findOne({ owner : ownerId })
         await theFormup.populate({
                     path:"owner"
                 }).execPopulate()
         console.log(theFormup)
 
        res.status(200).send({formups,owner:theFormup.owner})
    }catch(error){
        res.status(400).send(error)
    }
})

router.post('/formups',async (req,res)=>{
    console.log(req.body)
     try{
        const theFormup=await Inquire.findById(req.body.owner)
        if(!theFormup){
            return res.status(400).send({ error: 'Invalid owner!' })    
        }
        const formups = new FormUp(req.body)
        await formups.save()
        res.status(201).send(formups)
    }catch(error){
        res.status(400).send(error)
    }
})

router.put('/formups/:id', async (req,res)=>{
    console.log(req.body)
    const update = Object.keys(req.body)
    const allowedUpdates = ['response']
    const isValidOperation = update.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid operation.'})
    }

    try {
        console.log(req.body)
        const id=req.params.id
        const formups = await FormUp.findById(id)
        update.forEach((update)=> formups[update] = req.body[update])
        await formups.save()
        res.status(200).send(formups)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.delete('/formups/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const formups = await FormUp.findById(id)
        await formups.delete()
        res.status(200).send(formups)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports =router