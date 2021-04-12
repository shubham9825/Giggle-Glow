const express = require('express')
const Inquire = require('../model/inqurie')

const router = new express.Router

router.get('/inquires', async(req,res)=>{
    try {
        const inquires = await Inquire.find()
        res.status(200).send(inquires)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/inquires',async(req,res)=>{
    try {
       // console.log(req.body)
        const inquires = new Inquire(req.body)
        await inquires.save()
        res.status(201).send(inquires)
    } catch (error) {
       // console.log(error)
        res.status(400).send(error)

    }
})

router.put('/inquires/:id',async(req,res)=>{
    const update = Object.keys(req.body)
    const allowedUpdates = ['fname','lname','email','phone','message']
    const isValidOperation= update.every((update)=> allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error:'Invalid operation.'})
    }

    try {
        const id = req.params.id
        const inquires = await Inquire.findById(id)
        update.forEach((update)=> inquires[update] = req.body[update])
        await inquires.save()
        res.status(200).send(inquires)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/inquires/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const inquires = await Inquire.findById(id)
        await inquires.delete()
        res.status(200).send(inquires)
    } catch (error) {
        res.status(400).send(error)
    }
})
 module.exports = router