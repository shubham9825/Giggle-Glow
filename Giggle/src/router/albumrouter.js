const express=require('express')
const Album=require('../model/album')

const router=new express.Router()

router.post('/albums',async(req,res)=>{
    const file=req.files.file
    try{
        file.mv(`${__dirname}/../uploads/Album/${file.name}`,async err=>{
            if(err){        
                console.log(err)
                res.status(500).send(err)
            }
            console.log('------insert-----'+file.name)
            res.status(200).send({fileName:file.name,filePath:`service/${file.name}`})
        })
        const services = new Album(JSON.parse(req.body.data))
        await services.save()
    }catch(error){
        res.status(400).send(error)
    }
})

router.get('/albums',async(req,res)=>{
    
    //res.send("Read User")
    try{
        const albums=await Album.find()
        res.status(200).send(albums)
    }catch(error){
        res.status(400).send(error)
    }
})

router.put('/albums/:id', async (req,res)=>{
    console.log(JSON.parse(req.body.data))
    console.log(req.files.file)
    console.log(req.params.id)
    const file=req.files.file
    const update = Object.keys(JSON.parse(req.body.data))
    const allowedUpdates = ['album','image']
    const isValidOperation = update.every((update) => allowedUpdates.includes(update))    
    if(file!=null){
        console.log('File Moving.........')
        file.mv(`${__dirname}/../uploads/Album/${file.name}`,async err=>{
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
        const albums = await Album.findById(id)
        update.forEach((update)=> albums[update] = JSON.parse(req.body.data)[update])
        await albums.save()
        res.status(200).send(albums)
    } catch (error) {
        console.log('error block')
        res.status(400).send(error)
    }
})


router.put('/albumdata/:id', async (req,res)=>{
    console.log(req.body)
    console.log(req.params.id)
    const update = Object.keys(req.body)
    const allowedUpdates = ['album','image']
    const isValidOperation = update.every((update) => allowedUpdates.includes(update))    

    if(!req.params.id){
        return res.status(400).send({error: 'Invalid operation.'})
    }
    try {
        const id=req.params.id
        const albums = await Album.findById(id)
        update.forEach((update)=> albums[update] = req.body[update])
        await albums.save()
        res.status(200).send(albums)
    } catch (error) {
        console.log('error block')
        res.status(400).send(error)
    }
})

router.delete('/albums/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const albums = await Album.findById(id)
        await albums.delete()
        res.status(200).send(albums)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports=router

