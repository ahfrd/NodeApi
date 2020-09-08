const mongoose = require('mongoose');
const { schema } = require('./user');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    content: {
        type: String,
        require: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema)