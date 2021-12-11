const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema({

})

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;