const express=require('express')
const Gallary=require('../model/gallary')

const router=new express.Router()

router.post('/upload',(req,res)=>{
    console.log(req.files)
            
    const file=req.files.file
    console.log(file)

    file.mv(`${__dirname}/../uploads/${file.name}`,err=>{
        if(err){
            console.log(err)
            res.status(500).send(err)
        }
        // const formups = new Gallary(file)
        //  formups.save()
        // res.status(201).send(formups)

        res.status(200).send({fileName:file.name,filePath:`uploads/${file.name}`})
    })
})

// router.get('/upload',async (req,res)=>{
//     try{
//         const gallary = await Gallary.find()
//         console.log(gallary)
//         res.status(200).send(gallary)
//     }catch(error){
//         res.status(400).send(error)
//     }
// })

module.exports=router