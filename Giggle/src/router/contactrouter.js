const express = require('express')
const Contact = require('../model/contact')

const router = new express.Router

router.get('/contacts',async (req,res)=>{
    try{
        const contacts = await Contact.find()
        res.status(200).send(contacts)
    }catch(error){
        res.status(400).send(error)
    }
})

router.post('/contacts',async (req,res)=>{
    try{
        const contacts = new Contact(req.body)
        await contacts.save()
        res.status(201).send(contacts)
    }catch(error){
        res.status(400).send(error)
    }
})

router.put('/contacts/:id', async (req,res)=>{
    const update = Object.keys(req.body)
    const allowedUpdates = ['address','phone','email']
    const isValidOperation = update.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid operation.'})
    }

    try {
        const id=req.params.id
        const contacts = await Contact.findById(id)
        update.forEach((update)=> contacts[update] = req.body[update])
        await contacts.save()
        res.status(200).send(contacts)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/contacts/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const contacts = await Contact.findById(id)
        await contacts.delete()
        res.status(200).send(contacts)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports =router