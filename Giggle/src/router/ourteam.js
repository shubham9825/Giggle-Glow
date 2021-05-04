const express = require('express')
const OurTeam = require('../model/ourteam')

const router = new express.Router()

router.post('/ourteams', async (req, res) => {
    const file = req.files.file
    console.log(file)
    try {
        file.mv(`${__dirname}/../uploads/OurTeam/${file.name}`, async err => {
            if (err) {
                // console.log(err)
                res.status(500).send(err)
            }
            res.status(200).send({ filename: file.name, filePath: `OurTeam/${file.name}` })
        })
        const team = new OurTeam(JSON.parse(req.body.data))
        console.log(team)
        await team.save()
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/ourteams', async (req, res) => {
    try {
        const team = await OurTeam.find()
        res.status(200).send(team)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.put('/ourteams/:id', async (req, res) => {
    console.log(JSON.parse(req.body.data))
    console.log(req.files.file)
    console.log(req.params.id)
    const file = req.files.file

    const update = Object.keys(JSON.parse(req.body.data))
    const allowedUpdates = ['name', 'post', 'image']
    const isValidOperation = update.every((update) => allowedUpdates.includes(update))

    if (file != null) {
        file.mv(`${__dirname}/../uploads/OurTeam/${file.name}`, async err => {
            if (err) {
                res.status(500).send(err)
            }
        })
    }
    if (!req.params.id) {
        return res.status(400).send({ error: 'Invalid operation.' })
    }
 
    try {
        const id = req.params.id
        const team = await OurTeam.findById(id)
        update.forEach((update) => team[update] = JSON.parse(req.body.data)[update])
        await team.save()
        res.status(200).send(team)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.put('/teamdata/:id', async (req, res) => {
    console.log(req.body)
    console.log(req.params.id)

    const update = Object.keys(req.body)
    const allowedUpdates = ['name', 'post', 'image']
    const isValidOperation = update.every((update) => allowedUpdates.includes(update))
 
    if (!req.params.id) {
        return res.status(400).send({ error: 'Invalid operation.' })
    }
 
    try {
        const id = req.params.id
        const team = await OurTeam.findById(id)
        update.forEach((update) => team[update] = req.body[update])
        await team.save()
        res.status(200).send(team)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/ourteams/:id', async (req, res) => {
    try {
        const id = req.params.id
        const team = await OurTeam.findById(id)
        await team.delete()
        res.status(200).send(team)
    } catch (error) {
        res.status(400).send(error)
    }
})
module.exports = router