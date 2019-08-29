const Market = require('../model/market');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {
    async index(req, res) {
        const Markets = await Market.find().sort('-createdAt');

        return res.json(Markets);
    },
    async store(req, res) {
        const {superMarketName, superMarketPhone, 
                superMarketDescription, superMarketLocation, 
                superMarketMainImage, superMarketAdditionalImages
            } = req.body;
        // const { filename: image} = req.files;

        // const [name] = image.split('.');
        // const fileName = `${name}.jpg`;

        // await sharp(req.file.path)
        //     .resize(500)
        //     .jpeg({quality: 70})    
        //     .toFile(
        //         path.resolve(req.file.destination, 'resized', fileName)
        //     )

        // fs.unlinkSync(req.file.path);
        
        const market = await Market.create({
            superMarketName,
            superMarketPhone,
            superMarketDescription,
            superMarketLocation,
            superMarketMainImage,
            superMarketAdditionalImages
        });

        req.io.emit('market', market);
        return res.json(market);
    }
};