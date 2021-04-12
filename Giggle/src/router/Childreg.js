const express=require('express')
const Registration=require('../model/childreg')

const router=new express.Router()

router.get('/registrations',async(req,res)=>{
    try{
        const registrations=await Registration.find()
        res.status(200).send(registrations)
    }catch(error){
        res.status(400).send(error)
    }
})

router.post('/registrations',async(req,res)=>{
    try{
        const registrations=new Registration(req.body)
        await registrations.save()
        res.status(201).send(registrations)
    }catch(error){
        res.status(400).send(error)
    }
})

router.put('/registrations/:id', async (req,res)=>{
    const update = Object.keys(req.body)
    const allowedUpdates = ['fname','lname','address','city','states','zipcode','gender','parentnm','phonenum','plcwork','email','doctornm','drphonenum','allergies']
    const isValidOperation = update.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid operation.'})
    }

    try {
        const id=req.params.id
        const registrations = await Registration.findById(id)
        update.forEach((update)=> registrations[update] = req.body[update])
        await registrations.save()
        res.status(200).send(registrations)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/registrations/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const registrations = await Registration.findById(id)
        await registrations.delete()
        res.status(200).send(registrations)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports=router