const { json } = require('body-parser')
const express=require('express')
const service=require('../model/service')

const router=new express.Router()

// router.post('/services',async(req,res)=>{
//     console.log(req.body)
//     try{
//         const services=new service(req.body)
//         await services.save()
//         res.status(201).send(services)
//     }catch(error){
//         res.status(400).send(error)
//     }
// })

router.post('/services',async(req,res)=>{
    console.log('----insert----'+req.body)
    const file=req.files.file
    try{
        // res.status(201).send(formups)
        // console.log(file)
        file.mv(`${__dirname}/../uploads/service/${file.name}`,async err=>{
            if(err){
                console.log(err)
                res.status(500).send(err)
            }
            console.log('------insert-----'+file.name)
            res.status(200).send({fileName:file.name,filePath:`service/${file.name}`})
        })
        const services = new service(JSON.parse(req.body.data))
        await services.save()
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
    const allowedUpdates = ['service_name','short_discription','tagline','long_question','image']
    const isValidOperation = update.every((update) => allowedUpdates.includes(update))

    console.log(req.body)
    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid operation.'})
    }
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