//importation des modules nécessaires
import express from "express";
import dotenv from 'dotenv';
import { connectingBD } from "./config/connectingDB.js";




//initialize
dotenv.config({path:'./config/.env'})
const {atlas_url,APP_PORT_BACK} = process.env;

//Middleware pour traiter les requétes JSON
const app = express();
app.use(express.json());

//Route de test
app.get('/', (req, res) => {   
    res.send('Welcome');
});


app.get('/api.chucknorris.io/jokes/random',(req, res) => {
    res.data.id;
   // res.render('Welcome');
});

// app.get(`/jsonplaceholder.typicode.com/users/${userId}`,(req, res) => {
//     res.data;
//    // res.render('Welcome');
// });

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
//app.listen(port, () => {
  //      console.log(`Server  ${port}`);
    //});
    const start = async() => {
        try{
            await connectingBD(atlas_url);
            app.listen(APP_PORT_BACK, ()=>{
                console.log(`App listen at http://${APP_LOCALHOST}:${APP_PORT_BACK}`)
            })
    
        }catch(err){
            console.log(err)
        }
    }
    
    start(); 