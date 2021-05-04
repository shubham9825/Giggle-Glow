const express=require('express')
const service=require('../model/service')

const router=new express.Router()

router.post('/services',async(req,res)=>{
    const file=req.files.file
    if(file!== null){
        file.mv(`${__dirname}/../uploads/service/${file.name}`,async err=>{
            if(err){
                console.log(err)
                res.status(500).send(err)
            }
        })
    }
    try{
        const services = new service(JSON.parse(req.body.data))
        await services.save()
        res.status(200).send(services)
    }catch(error){
        console.log('error ------------------'+error)
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
    console.log(JSON.parse(req.body.data))
    console.log(req.files.file)
    console.log(req.params.id)
    const file=req.files.file
    const update = Object.keys(JSON.parse(req.body.data))
    const allowedUpdates = ['service_name','short_discription','image']
    const isValidOperation = update.every((update) => allowedUpdates.includes(update))

    if(file!=null){
         file.mv(`${__dirname}/../uploads/service/${file.name}`,async err=>{
            if(err){
                console.log(err)
                res.status(500).send(err)
            }
        })
    }    
    if(!req.params.id){
        return res.status(400).send({error: 'Invalid operation.'})
    }
    
    try {        
        const id=req.params.id
        const services = await service.findById(id)
        update.forEach((update)=> services[update] = JSON.parse(req.body.data)[update])
        await services.save()
        res.status(200).send(services)
    } catch (error) {
        console.log('error block')
        res.status(400).send('error---------->'+error)
    }
  
})

router.put('/servicedata/:id', async (req,res)=>{
    console.log(req.body)
    console.log(req.params.id)
    console.log('--------------------')

    const update = Object.keys(req.body)
    const allowedUpdates = ['service_name','short_discription','image']
    const isValidOperation = update.every((update) => allowedUpdates.includes(update))

    if(!req.params.id){
        return res.status(400).send({error: 'Invalid operation.'})
    }

    console.log(req.params.id)
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