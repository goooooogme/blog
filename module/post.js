const {Schema, model} = require('mongoose')

const post = new Schema({
    title: {
        type: String,
        required: true
    },
    messagePrev: {
        type: String,
        required: true
    },
    messageFull: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    daymonth: String,
    time: String
        
})

module.exports = model('Post', post);