const express = require('express')
const Notice = require('../model/notice')

const router = new express.Router


router.get('/notices', async(req,res)=>{
    try {
        const notices = await Notice.find()
        res.status(200).send(notices)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/notices',async(req,res)=>{
    try {
        const notices = new Notice(req.body)
        await notices.save()
        res.status(201).send(notices)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.put('/notices/:id',async(req,res)=>{
    const update = Object.keys(req.body)
    const allowedUpdates = ['title','description']
    const isValidOperation= update.every((update)=> allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error:'Invalid operation.'})
    }

    try {
        const id = req.params.id
        const notices = await Notice.findById(id)
        update.forEach((update)=> notices[update] = req.body[update])
        await notices.save()
        res.status(200).send(notices)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/notices/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const notices = await Notice.findById(id)
        await notices.delete()
        res.status(200).send(notices)
    } catch (error) {
        res.status(400).send(error)
    }
})
 module.exports = router