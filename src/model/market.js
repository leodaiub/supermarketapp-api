const { Schema, model } = require('mongoose');

const marketSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'dev',
    }],
}, {
    timestamps: true
});

module.exports = model('market', marketSchema);