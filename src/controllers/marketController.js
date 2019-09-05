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

        const { originalname: name, size, key, location: url = "" } = req.files;
        
        const { superMarketName, 
                superMarketPhone, 
                superMarketDescription, 
                superMarketLocation,                 
                } = req.body;

        const files = [];

        for ( let i = 0; req.files.length > i; i++){
            files.push(req.files[i]);
        }
        
        const superMarketMainImage = files.shift();
        const superMarketAdditionalImages = files;
        
        const market = await Market.create({
            superMarketName,
            superMarketPhone,
            superMarketDescription,
            superMarketLocation: JSON.parse(superMarketLocation),
            superMarketMainImage,
            superMarketAdditionalImages
        });

        return res.json(market);

    },

    
    // -> Update the supermarket by ID

    async update(req, res) { 
        console.log(req.body); 
        const market = await Market.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).send({ message: 'Supermarket successfully updated', market });
      },
      
    // -> Delete the supermarket by ID

    async delete(req, res){
        const market = await Market.findByIdAndDelete(req.params.id);
        return res.status(200).send({ message: 'Supermarket successfully deleted!', market });
      }
};