const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: 'Please enter text for your thought.',
        min: [1],
        max: [280, 'This thought is too long!']
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
    reactions: {
        
    }
    
},
{
    toJSON: {
        getters: true
    }
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;