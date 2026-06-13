const mongoose = require('mongoose')

const certificateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    issuer: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    link: {
        type: String
    },
    image: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Certificate', certificateSchema)