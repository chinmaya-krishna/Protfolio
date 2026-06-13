const express = require('express')
const router = express.Router()
const Certificate = require('../models/Certificate')

// GET all certificates
router.get('/', async (req, res) => {
    try {
        const certificates = await Certificate.find()
        res.json(certificates)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// POST add new certificate
router.post('/', async (req, res) => {
    const certificate = new Certificate({
        name: req.body.name,
        issuer: req.body.issuer,
        date: req.body.date,
        link: req.body.link,
        image: req.body.image
    })
    try {
        const newCertificate = await certificate.save()
        res.status(201).json(newCertificate)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// DELETE a certificate
router.delete('/:id', async (req, res) => {
    try {
        await Certificate.findByIdAndDelete(req.params.id)
        res.json({ message: 'Certificate deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
// PUT update certificate
router.put('/:id', async (req, res) => {
    try {
        const updated = await Certificate.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(updated)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
module.exports = router