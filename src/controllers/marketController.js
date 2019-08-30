const Market = require('../model/market');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {

    // -> List the supermarkets on cronologic order.
    async index(req, res) {
        const Markets = await Market.find().sort('-createdAt');

        return res.json(Markets);
    },

    // -> Get supermarket by ID

    async findById(req, res) {
        const market = await Market.findById(req.params.id);
        res.status(200).send(market);
    },
  
    // -> Create the supermarket.
    async store(req, res) {
        const {
                superMarketName, 
                superMarketPhone, 
                superMarketDescription, 
                superMarketLocation, 
                //superMarketMainImage, 
                //superMarketAdditionalImages 
                
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
           // superMarketMainImage,
           // superMarketAdditionalImages
        });

        req.io.emit('market', market);
        return res.json(market);

    },

    
    // -> Update the supermarket by ID

    async update(req, res) {
        // => Validação de campos vazios:
        // if (!req.body.nomeFuncionario || !req.body.cargo || !req.body.numeroIdentificador) {
        //   return res.status(400).send({ message: 'Os campos não podem ser vazios.' });
        // }
      
        const market = await Market.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).send({ message: 'Supermarket successfully updated', market });
      },
      
    // -> Delete the supermarket by ID

    async delete(req, res){
        const market = await Market.findByIdAndDelete(req.params.id);
        return res.status(200).send({ message: 'Supermarket successfully deleted!', market });
      }
};