const {Schema, model} = require('mongoose');

const category = new Schema({
    title: {
        type: String,
        required: true
    }
});

module.exports = model('Category', category);