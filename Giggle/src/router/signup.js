const express = require('express')
const SignUp = require('../model/signup')
const nodemailer = require('nodemailer')

const router = new express.Router

router.get('/signups', async (req, res) => {
    try {
        const data = await SignUp.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/signups', async (req, res) => {
    try {
        const data = new SignUp(req.body)
        await data.save()
        res.status(201).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.put('/signups/:id', async (req, res) => {
    const update = Object.keys(req.body)
    const allowedUpdates = ['fname', 'lname', 'email', 'password']
    const isValidOperation = update.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid operation.' })
    }

    try {
        const id = req.params.id
        const data = await SignUp.findById(id)
        update.forEach((update) => data[update] = req.body[update])
        await data.save()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/signups/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = await SignUp.findById(id)
        await data.delete()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
})

//login
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await SignUp.findOne({ email: email, password: password })
        // console.log(user)

        if (!user) {
            throw new Error('Unable To Login')
        }
        // sessionStorage.login=JSON.stringify(login)
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

//forgot password 
router.post('/forgot', async (req, res) => {
    const { email, otp } = req.body
    // console.log(req.body)
    try {
        const user = await SignUp.findOne({ email: email })
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
                user: "",
                pass: "",
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

router.put('/forgot/:email', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await SignUp.findOne({ email: email })
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


module.exports = router
