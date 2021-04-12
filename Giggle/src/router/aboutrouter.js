const express=require('express')
const About=require('../model/about')

const router=new express.Router()

router.get('/abouts',async(req,res)=>{
    try{
        const abouts=await About.find()
        res.status(200).send(abouts)
    }catch(error){
        res.status(400).send(error)
    }
})

router.post('/abouts',async(req,res)=>{
    try{
        const abouts=new About(req.body)
        await abouts.save()
        res.status(201).send(abouts)
    }catch(error){
        res.status(400).send(error)
    }
})


router.put('/abouts/:id', async (req,res)=>{
    const update = Object.keys(req.body)
    const allowedUpdates = ['about','mission','vision']
    const isValidOperation = update.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid operation.'})
    }

    try {
        const id=req.params.id
        const abouts = await About.findById(id)
        update.forEach((update)=> abouts[update] = req.body[update])
        await abouts.save()
        res.status(200).send(abouts)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/abouts/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const abouts = await About.findById(id)
        await abouts.delete()
        res.status(200).send(abouts)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports=router 