const { Schema, model, Types } = require('mongoose');

// const FriendSchema = new Schema({
//     friendId: {
//         type: Schema.Types.ObjectId,
//         default: () => new Types.ObjectId()
//     },
//     username: {
//         type: Schema.Types.ObjectId,
        
//     }
// })

const UserSchema = new Schema({
    username: {
        type: String,
        required: 'Please input a username for your profile.',
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: 'Please enter a valid email address.',
        unique: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: []
},
{
    toJSON: {
        virtuals: true
    }
})

// create the User model using the UserSchema
const User = model('User', UserSchema);

// get total friendCount
UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce((total, user) => total + user.friends.length + 1, 0);
});

// export the user model
module.exports = User;