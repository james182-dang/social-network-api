const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required,
        min: [1, 'Please enter text for your thought.'],
        max: [280, 'This thought is too long! (280 maximum characters)']
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required
    },
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reactions'
        }
    ]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    }
})

const Thought = model('Thought', ThoughtSchema);

// create a virtual of total reactions

module.exports = Thought;