const express=require('express')
const Gallary=require('../model/gallary')

const router=new express.Router()

router.post('/upload',(req,res)=>{
    console.log(req.files)
            
    const file=req.files.file
    file.mv(`${__dirname}/../uploads/${file.name}`,async err=>{
        if(err){
            console.log(err)
            res.status(500).send(err)
        }

        console.log(file.name)
        const gallary = new Gallary({fileName : file.name})
        await gallary.save()
        res.status(200).send({fileName:file.name,filePath:`uploads/${file.name}`})
    })
})

router.get('/upload',async (req,res)=>{
    try{
        const gallary = await Gallary.find()
        console.log(gallary)
        res.status(200).send(gallary)
    }catch(error){
        res.status(400).send(error)
    }
})


router.delete('/upload/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const gallary = await Gallary.findById(id)
        await gallary.delete()
        res.status(200).send(gallary)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports=router