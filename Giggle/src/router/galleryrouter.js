const express=require('express')
const Gallary=require('../model/gallary')
const Album = require('../model/album')

const router=new express.Router()

router.post('/upload/:owner',async(req,res)=>{
    console.log(req.files)
    const file=req.files.file
    console.log(req.params.owner)
    const theGallary = await Album.findById(req.params.owner)

    console.log(theGallary)
    // if(!theGallary){
    //     return res.status(400).send({ error: 'Invalid owner!' })    
    // }
    file.mv(`${__dirname}/../uploads/${file.name}`,async err=>{
        if(err){
            console.log(err)
            res.status(500).send(err)
        }

        console.log(file.name)
        const gallary = new Gallary({fileName : file.name,owner:theGallary})
        console.log(gallary)
        await gallary.save()
        res.status(200).send({fileName:file.name,filePath:`uploads/${file.name}`,gallary})
    })
})

router.get('/upload/:owner',async (req,res)=>{
     //res.send("Read User")
     const ownerId=req.params.owner
     console.log(ownerId)
    try{
        const gallary = await Gallary.find({owner : ownerId})
        // console.log(gallary)
        //  Get Owner Details from task 
        //  const theGallary=await Gallary.findOne({ owner : ownerId })
        //  console.log(theGallary)
        //  await theGallary.populate({
        //              path:"owner"
        //          }).execPopulate()
        //  console.log(theGallary)
 
         res.status(200).send(gallary)
        // res.status(200).send(gallary)
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