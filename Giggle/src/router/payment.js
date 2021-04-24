const express = require('express')
const Payment = require('../model/payment')

const router = new express.Router

router.post('/paymentreport',async (req, res)=>{
    try{
        var payments = await Payment.find({})

        var temp=await Payment.aggregate( [
           // { "$match": { "$eq": [{ "$month": "$t_date" }, 4] } },
            {
              $group: {
                _id:  "$owner",
                totalHour : { $sum : "$total_time"}  
              }
            }
          ]);
          console.log(temp)
        // const payments = await Payment.find()
        //console.log(payments)
        // Get Owner Details from task 
        //const thePayment = await Payment.findOne({ owner: ownerId })

        payments=payments.filter(thePayment=>{
            //console.log(thePayment.t_date.getFullYear())
            
            return thePayment.t_date.getMonth()+1===req.body.month &&
                            thePayment.t_date.getFullYear()===req.body.year 
        })

        // function groupBy(list, keyGetter) {
        //     const map = new Map();
        //     list.forEach((item) => {
        //          const key = keyGetter(item);
        //          const collection = map.get(key);
        //          if (!collection) {
        //              map.set(key, [item]);
        //          } else {
        //              collection.push(item);
        //          }
        //     });
        //     return map;
        // }
          //console.log(groupBy(payments,pet => pet.owner));          
        
          const map=new Map()
          map.set('12',"Hello")
          map.set('13',"Hello")
          map.set('12',"Hello")
            console.log(map)

          console.log(payments)
        let groupOwner=[]
        for(i=0;i<payments.length;i++){
            let tempDatas=groupOwner.filter(theOwner=> {
                console.log(theOwner.owner+"==="+payments[i].owner)
                
                return theOwner.owner==payments[i].owner
            })
            // console.log(payments[i].owner)
            // console.log(groupOwner)
            // console.log(tempDatas)
            if(tempDatas.length>0){
                let sum=payments[i].total_time
                for(let p=0;p<tempDatas.length;p++){
                    sum+=tempDatas[p].total_time
                }
                groupOwner=groupOwner.filter(theOwner=> theOwner.owner!==payments[i].owner)
                groupOwner.push({
                    owner : payments[i].owner,
                    total_time : sum 
                })
                console.log(groupOwner)
            }else{
                groupOwner.push({
                    owner : payments[i].owner,
                    total_time : payments[i].total_time 
                })
            }
        }
        console.log(groupOwner)

        for(let i=0;i<payments.length;i++){
            await payments[i].populate({
                path: "owner"
            }).execPopulate()
        }        
        res.status(200).send({ payments })
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
    console.log(req.body.owner)
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