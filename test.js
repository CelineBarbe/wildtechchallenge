const {Argonaute} = require('./app/models/argonaute');

Argonaute.findAll().then( argonautes => {
    console.log('Argonautes.findAll');
    for (const argonaute of argonautes) {
        console.log(argonaute);
    };
});