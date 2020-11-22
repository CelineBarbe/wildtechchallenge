const Argonaute = require('../models/argonaute');

const mainController = {
    homePage: async (req, res) => {

        try {
            const argonautes = await Argonaute.findAll()
            res.render('homePage', {argonautes});
        } catch (error) {
           console.log(error);
        }
    },

    handleForm: async(req, res) => {
        try {
            const newArgonaute = await Argonaute.create(req.body);
            newArgonaute.save();
            const argonautes = await Argonaute.findAll()
            res.render('homePage', {argonautes});
                        
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = mainController;