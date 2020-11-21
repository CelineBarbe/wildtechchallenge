const {Argonaute} = require('../models/argonaute.js');

const mainController = {
    homePage: async (req, res) => {

        try {
            const argonautes = await Argonaute.findAll()
            res.render('homePage', {argonautes});
        } catch (error) {
           console.log(error);
        }
    },

    handleForm: (res, req) => {
        
    }

}

module.exports = mainController;