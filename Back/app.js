//importation des modules nécessaires
import express from "express";
import dotenv from 'dotenv';
import { connectingBD } from "./config/connectingDB.js";
import mongoose from 'mongoose';




//initialize
dotenv.config({path:'./config/.env'})
const {atlas_url,APP_PORT_BACK,APP_LOCALHOST} = process.env;

//Middleware pour traiter les requétes JSON
const app = express();
app.use(express.json());


    //connection a la base de données
    const start = async() => {
        try{
            await connectingBD(atlas_url);


            const produitSchema = new mongoose.Schema({
                nom: String,
                prix: Number,
                description: String,
            });
            
            // Modèle de produit
            const Produit = mongoose.model('Produit', produitSchema);
            //Route Poste pour ajouté un produit
            app.post('/api/ajouter-produit', async (req, res) => {
                try {
                    // Récupérez les données du produit depuis le corps de la requête
                    const nouveauProduit = new Produit(req.body);
                    
                    // Insérez le produit dans la base de données
                    const resultat = await nouveauProduit.save();
    
                    // Répondez avec le résultat de l'opération
                    res.json({ message: 'Produit ajouté avec succès', insertedId: resultat.inserted._Id });
                } catch (error) {
                    console.error('Erreur lors de l\'ajout du produit dans la base de données :', error);
                    res.status(500).json({ message: 'Erreur lors de l\'ajout du produit' });
                }
            });
    
            // Démarrer le serveur
            app.listen(APP_PORT_BACK, ()=>{
                console.log(`App listen at http://${APP_LOCALHOST}:${APP_PORT_BACK}`)
            })
    
        }catch(err){
            console.log(err)
        }
    }
    
    start(); 