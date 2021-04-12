const express = require('express')
const Fee = require('../model/fee')

const router = new express.Router

router.get('/fees',async (req,res)=>{
    try{
        const fees = await Fee.find()
        res.status(200).send(fees)
    }catch(error){
        res.status(400).send(error)
    }
})

router.post('/fees',async (req,res)=>{
    try{
        const fees = new Fee(req.body)
        await fees.save()
        res.status(201).send(fees)
    }catch(error){
        res.status(400).send(error)
    }
})

router.put('/fees/:id', async (req,res)=>{
    const update = Object.keys(req.body)
    const allowedUpdates = ['totalamt','paid','unpaid','date','installmetnum','installmetamt']
    const isValidOperation = update.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid operation.'})
    }

    try {
        const id=req.params.id
        const fees = await Fee.findById(id)
        update.forEach((update)=> fees[update] = req.body[update])
        await fees.save()
        res.status(200).send(fees)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/fees/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const fees = await Fee.findById(id)
        await fees.delete()
        res.status(200).send(fees)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports =router