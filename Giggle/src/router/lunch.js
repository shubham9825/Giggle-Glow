const express=require('express')
const Lunch=require('../model/lunch')

const router = new express.Router

router.get('/lunchs',async (req,res)=>{
    try{
        const data = await Lunch.find()
        res.status(200).send(data)
    }catch(error){
        res.status(400).send(error)
    }
})

router.post('/lunchs',async (req,res)=>{
    try{
        const data = new Lunch(req.body)
        await data.save()
        res.status(201).send(data)
    }catch(error){
        res.status(400).send(error)
    }
})

router.put('/lunchs/:id', async (req,res)=>{
    const update = Object.keys(req.body)
    const allowedUpdates = ['food']
    const isValidOperation = update.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid operation.'})
    }
    try {
        const id=req.params.id
        const data = await Lunch.findById(id)
        update.forEach((update)=> data[update] = req.body[update])
        await data.save()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/lunchs/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const data = await Lunch.findById(id)
        await data.delete()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
})
module.exports =router