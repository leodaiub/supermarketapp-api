const Market = require('../model/Market');

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

        const [{ originalname: name, size, key, location: url = "" }] = req.files;

        const { superMarketName, 
                superMarketPhone, 
                superMarketDescription, 
                superMarketLocation,                 
                } = req.body;

        //const superMarketLocation2 = JSON.parse(superMarketLocation);

        const superMarketMainImage = req.files[0].url;

        const superMarketAdditionalImages = req.files.shift().url;
        
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
    },

    
    // -> Update the supermarket by ID

    async update(req, res) {  
        const market = await Market.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).send({ message: 'Supermarket successfully updated', market });
      },
      
    // -> Delete the supermarket by ID

    async delete(req, res){
        const market = await Market.findByIdAndDelete(req.params.id);
        return res.status(200).send({ message: 'Supermarket successfully deleted!', market });
      }
};