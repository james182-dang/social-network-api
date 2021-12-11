const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required,
        max: [280]
    },
    username: {
        type: Schema.Types.ObjectId,
        ref: 'User',
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
});

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
    reactions: [ReactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

const Thought = model('Thought', ThoughtSchema);

// create a virtual of total reactions
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

module.exports = Thought;