const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: 'Please input a username for your profile.',
        trim: true,
        unique
    },
    email: {
        type: String,
        required: 'Please enter a valid email address.',
        unique,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/]
    },
    thoughts: {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
    },
    friends: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},
{
    toJSON: {
        virtuals: true
    }
})

// create the User model using the UserSchema
const User = model('User', UserSchema);

// get total friendCount
// CODE HERE

// export the user model
module.exports = User;