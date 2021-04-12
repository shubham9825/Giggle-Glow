const express=require('express')
const service=require('../model/service')

const router=new express.Router()

router.post('/services',async(req,res)=>{
    console.log(req.body)
    try{
        const services=new service(req.body)
        await services.save()
        res.status(201).send(services)
    }catch(error){
        res.status(400).send(error)
    }
})

router.get('/services',async(req,res)=>{
    try{
        const services=await service.find()
        res.status(200).send(services)
    }catch(error){
        res.status(400).send(error)
    }
})

router.put('/services/:id', async (req,res)=>{
    const update = Object.keys(req.body)
    const allowedUpdates = ['service_name','short_discription','tagline','long_question']
    const isValidOperation = update.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid operation.'})
    }

    try {
        const id=req.params.id
        const services = await service.findById(id)
        update.forEach((update)=> services[update] = req.body[update])
        await services.save()
        res.status(200).send(services)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/services/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const services = await service.findById(id)
        await services.delete()
        res.status(200).send(services)
    } catch (error) {
        res.status(400).send(error)
    }
})
module.exports=router