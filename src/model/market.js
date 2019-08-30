const { Schema, model } = require('mongoose');

const marketSchema = new Schema({
    superMarketName: {
        type: String,
        require: true,
    },
    superMarketPhone: {
        type: String,
        required: true,
    },
    superMarketDescription: String,
    superMarketLocation: {
        street: String,
        number:String, 
        district:String, 
        zip:String, 
        country:String, 
        city:String, 
        state: String,
    },
    // superMarketMainImage: {
    //     type: String,
    //     required: true,
    // },
    // superMarketAdditionalImages: [{
    //     type: String,
    // }],
}, {
    timestamps: true,
    collection: 'SuperMarkets'
});

module.exports = model('market', marketSchema);