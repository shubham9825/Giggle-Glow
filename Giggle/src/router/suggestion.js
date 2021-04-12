const express=require('express')
const Suggestion=require('../model/suggestion')

const router = new express.Router

router.get('/suggestions',async (req,res)=>{
    try{
        const data = await Suggestion.find()
        res.status(200).send(data)
    }catch(error){
        res.status(400).send(error)
    }
})

router.post('/suggestions',async (req,res)=>{
    try{
        const data = new Suggestion(req.body)
        await data.save()
        res.status(201).send(data)
    }catch(error){
        res.status(400).send(error)
    }
})

router.put('/suggestions/:id', async (req,res)=>{
    const update = Object.keys(req.body)
    const allowedUpdates = ['suggest']
    const isValidOperation = update.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid operation.'})
    }

    try {
        const id=req.params.id
        const data = await Suggestion.findById(id)
        update.forEach((update)=> data[update] = req.body[update])
        await data.save()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/suggestions/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const data = await Suggestion.findById(id)
        await data.delete()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
})
module.exports =router