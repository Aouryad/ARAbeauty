//importation des modules nécessaires
const express = require('express');
const app = express();
const port = 3000;//biensure on peut changé le port


//Middleware pour traiter les requétes JSON
app.use(express.json());

//Route de test
app.get('/', (req, res) => {   
    res.send('Welcome');
});

//Route get avec des parametres
app.get('/bonjour/:nom', (req, res) => {   
    res.send(`Welcome, ${nom}!`);
});

//Route avec post
app.post('/creer-utilisateur', (req, res) => {   
    const utilisateur = req.body;
    console.log(utilisateur);
    res.send('Utilisateur créé!');
});

//Lancement du serveur sur le port spécifié
app.listen(port, () => {
        console.log(`Server  ${port}`);
    });