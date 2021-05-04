const express = require('express')
const Payment = require('../model/payment')
const Registration = require('../model/childreg')

const router = new express.Router

router.post('/paymentreport',async (req, res)=>{
    try{
            const Month=req.body.Month
            const Year=req.body.Year
            var temp=await Payment.aggregate( [
            { "$match":{ "$and": [
                    {"$expr": { "$eq": [{ "$month": "$t_date" },parseInt(Month)] } },
                    {"$expr": { "$eq": [{ "$year": "$t_date" },parseInt(Year)] } }
                ] } 
            },  
            {
              $group: {
                _id:  "$owner",
                totalHour : { $sum : "$total_time"}  
              }
            }
          ]);
          console.log(temp)      
        for(let i=0;i<temp.length;i++){
            let owner = await Registration.findById(temp[i]._id)
            temp[i].owner=owner 
        }        
        res.status(200).send(temp)
    }catch(error){
        res.status(400).send(error)
    }
})

router.get('/payments/:owner', async (req, res) => {
    //res.send("Read User")
    const ownerId = req.params.owner
    try {
        const payments = await Payment.find({ owner: ownerId })
        // const payments = await Payment.find()

        // Get Owner Details from task 
        const thePayment = await Payment.findOne({ owner: ownerId })
        await thePayment.populate({
            path: "owner"
        }).execPopulate()
        console.log(thePayment)
        res.status(200).send({ payments, owner: thePayment.owner })
        // res.status(200).send(payments)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/payments', async (req, res) => {
    console.log(req.body)
    try {
        // const thePayment = await Payment.findById(req.body.owner)
        // if (!thePayment) {
        //     return res.status(400).send({ error: 'Invalid owner!' })
        // }
        const payments = new Payment(req.body)
        await payments.save()
        res.status(201).send(payments)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.put('/payments/:id', async (req, res) => {
    const update = Object.keys(req.body)
    const allowedUpdates = ['date', 'entry_time', 'exit_time', 'total_time', 'fees']
    const isValidOperation = update.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid operation.' })
    }

    try {
        const id = req.params.id
        const payments = await Payment.findById(id)
        update.forEach((update) => payments[update] = req.body[update])
        await payments.save()
        res.status(200).send(payments)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/payments/:id', async (req, res) => {
    try {
        const id = req.params.id
        const payments = await Payment.findById(id)
        await payments.delete()
        res.status(200).send(payments)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router