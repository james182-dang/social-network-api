const { ObjectId } = require('bson');
const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Reaction = new Schema({
    reactionId: {
        type: Schema.ObjectId,
        default: new ObjectId
    },
    reactionBody: {
        type: String,
        required,
        max: [280]
    },
    username: {
        type: String,
        required
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    }
},
{
    toJSON: {
        getters: true
    }
})

module.exports = Reaction;