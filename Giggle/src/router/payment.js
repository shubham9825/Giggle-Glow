const express = require('express')
const Payment = require('../model/payment')

const router = new express.Router

router.get('/payments',async (req,res)=>{
    try{
        const payments = await Payment.find()
        res.status(200).send(payments)
    }catch(error){
        res.status(400).send(error)
    }
})

router.post('/payments',async (req,res)=>{
    try{
        const payments = new Payment(req.body)
        await payments.save()
        res.status(201).send(payments)
    }catch(error){
        res.status(400).send(error)
    }
})

router.put('/payments/:id', async (req,res)=>{
    const update = Object.keys(req.body)
    const allowedUpdates = ['date','installmetnum','installmetamt']
    const isValidOperation = update.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid operation.'})
    }

    try {
        const id=req.params.id
        const payments = await Payment.findById(id)
        update.forEach((update)=> payments[update] = req.body[update])
        await payments.save()
        res.status(200).send(payments)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/payments/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const payments = await Payment.findById(id)
        await payments.delete()
        res.status(200).send(payments)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports =router