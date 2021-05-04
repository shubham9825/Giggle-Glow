const express=require('express')
const Registration=require('../model/childreg')
const nodemailer = require('nodemailer')
const router=new express.Router()

router.get('/registrations/:id',async(req,res)=>{
    
    const _id = req.params.id
    
    try{
        // const registrations=await Registration.find()
        const registrations=await Registration.findById(_id)
        await user.populate({  //we use populate mathod 
            path:"payments"
        }).execPopulate()
        res.status(200).send({registrations,payments:registrations.payments})
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

router.get('/registrations',async(req,res)=>{
    try{
        const registrations=await Registration.find()
        res.status(200).send(registrations)
    }catch(error){
        res.status(400).send(error)
    }
})

// router.get('/profiles',async(req,res)=>{
//     const { email } = req.body
//     console.log('bad')
//     console.log(req.body)
//     console.log('good')
//     try{
//         const user = await Registration.findOne({ email: email })
//         // console.log(user)
//         if (!user) {
//             throw new Error('Unable To find Your Email')
//         }else{
//             res.status(200).send(user)
//         }
//     }catch(error){
//         res.status(400).send(error)
//     }
// })

//login
router.post('/plogin', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await Registration.findOne({ email: email, password: password })
        // console.log(user)

        if (!user) {
            throw new Error('Unable To Login')
        }
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

//forgot password 
router.post('/pforgot', async (req, res) => {
    const { email, otp } = req.body
    // console.log(req.body)
    try {
        const user = await Registration.findOne({ email: email })
        // console.log(user)
        if (!user) {
            throw new Error('Unable To find Your Email')
        }

        //otp sending...
        // create reusable transporter object using the default SMTP transport
        let transporter = await nodemailer.createTransport({
            host: "smtp.googlemail.com",  //   host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: "shubhamsheliya9824@gmail.com",
                pass: "Shubham@1199",
            },
        });

        let info = await transporter.sendMail({
            from: '"Day Care Center👻" <shubhamsheliya9824@gmail.com>', // sender address
            to: `${email}`, // list of receivers  
            subject: "Giggle&Glow✔", // Subject line
            // text: "Hello world?", // plain text body
            html: `
        Hi,<br><br>

        Greetings!<br><br>
        
        You are just a step away from accessing your account. We are sharing a verification code to access your account<br><br>
        
        Once you have verified the code, you'll be prompted to set a new password immediately. This is to ensure that only you have access to your account.<br><br>
        
        <b>Your OTP: ${otp}</b><br><br>       
        
        Best Regards,<br>
        Giggle & Glow
        
          ` // html body
        });

        if (info.messageId) {
            res.status(200).send("email sent successFully... ");
            console.log('send success')
        } else {
            res.status(400).send("Error with sending email");
            console.log('send fail')
        }

        //res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.put('/pforgot/:email', async (req, res) => {
    const { email, password } = req.body
    console.log(req.body)
    try {
        const user = await Registration.findOne({ email: email })
        if (!user) {
            throw new Error('Unable To find Your Email')
        } else {
            user.password=password
            await user.save()
            res.status(200).send(user)
        }
    } catch (error) {
        res.status(400).send(error)
    }
})



module.exports=router