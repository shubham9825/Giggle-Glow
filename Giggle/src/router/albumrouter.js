const express=require('express')
const Album=require('../model/album')

const router=new express.Router()

router.post('/albums',async(req,res)=>{
    try{
        const albums=new Album(req.body)
        await albums.save()
        res.status(201).send(albums)
    }catch(error){
        res.status(400).send(error)
    }
})

router.get('/albums',async(req,res)=>{
    try{
        const albums=await Album.find()
        res.status(200).send(albums)
    }catch(error){
        res.status(400).send(error)
    }
})

router.put('/albums/:id', async (req,res)=>{
    const update = Object.keys(req.body)
    const allowedUpdates = ['album_name']
    const isValidOperation = update.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid operation.'})
    }

    try {
        const id=req.params.id
        const albums = await Album.findById(id)
        update.forEach((update)=> albums[update] = req.body[update])
        await albums.save()
        res.status(200).send(albums)
    } catch (error) {
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