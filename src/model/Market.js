const { Schema, model } = require('mongoose');
const aws = require("aws-sdk");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const s3 = new aws.S3();


const marketSchema = new Schema({
    superMarketName: {
        type: String,
        //require: true,
    },
    superMarketPhone: {
        type: String,
        //required: true,
    },
    superMarketDescription: String,
    superMarketLocation: {
        //required: true,
        type: Object,
    },
    superMarketMainImage: {
        type: Object,
        //required: true,
    },
    superMarketAdditionalImages: [{
        type: Array,
    }],
}, {
    timestamps: true,
    collection: 'SuperMarkets'
});

marketSchema.pre("remove", function() {
if (process.env.STORAGE_TYPE === "s3") {
    return s3
    .deleteObject({
        Bucket: process.env.BUCKET_NAME,
        Key: this.key
    })
    .promise()
    .then(response => {
        console.log(response.status);
    })
    .catch(response => {
        console.log(response.status);
    });
} else {
    return promisify(fs.unlink)(
    path.resolve(__dirname, "..", "..", "tmp", "uploads", this.key)
    );
}
});


module.exports = model('Market', marketSchema);