const express = require('express')
const FormUp = require('../model/formup')

const router = new express.Router

router.get('/formups',async (req,res)=>{
    try{
        const formups = await FormUp.find()
        res.status(200).send(formups)
    }catch(error){
        res.status(400).send(error)
    }
})

router.post('/formups',async (req,res)=>{
     try{
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