// Les requires
require('dotenv').confid();
const express = require('express');
const router = require('router');

//création du serveur express
const app = express();

// réglage des moteurs de vues
app.set('view engine, ejs');
app.set('views', './app/views');

//fichiers statiques
app.use(express.static('./public'));

//gestion des routes post
app.use(express.urlencoded({extended: true}));

//routage
app.use(router);

//lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App lancée sur le port ${PORT}`);
});
