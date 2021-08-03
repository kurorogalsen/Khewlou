const express = require("express");
const mongoose = require("mongoose");
const article = require('./Models/article');

mongoose.connect('mongodb+srv://kurorogalsen:qBYLg5za2TaKMZ3@cluster0.lrq6s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/article/new' , (req , res, next)=>{

    const articles = new article({
        ...req.body
    });
    articles.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
    

    /* console.log("Requette POST reçue !");
    let objetRecupere = req.body;
    console.log(objetRecupere.title);
    console.log(objetRecupere.prix);
    console.log(objetRecupere.categorie);
    console.log(objetRecupere.devise);
    res.status(201);
    next(); */
})

app.get('/articles/all', (req, res, next) => {
    console.log("Requette GET reçue !");

    const allArticle = [
        {
            titre: "Bague",
            categorie: "Bijoux",
            prix: "3000",
            devise: "FCFA",
            url: "Images/Bijoux/bague.jpg"
        },
        {
            titre: "Boucle d'oreille",
            categorie: "Bijoux",
            prix: "1000",
            devise: "FCFA",
            url: "Images/Bijoux/boucle d'oreille.jpg"
        },
        {
            titre: "Collier",
            categorie: "Bijoux",
            prix: "3000",
            devise: "FCFA",
            url: "Images/Bijoux/collier.jpg"
        },
        {
            titre: "Airpod",
            categorie: "Electronique",
            prix: "50000",
            devise: "FCFA",
            url: "Images/Electronique/airpod.jpg"
        },
        {
            titre: "Camera",
            categorie: "Electronique",
            prix: "180000",
            devise: "FCFA",
            url: "Images/Electronique/camera.jpg"
        },
        {
            titre: "Chargeur",
            categorie: "Electronique",
            prix: "2000",
            devise: "FCFA",
            url: "Images/Electronique/chargeur.jpg"
        },
        {
            titre: "Clavier",
            categorie: "Electronique",
            prix: "3000",
            devise: "FCFA",
            url: "Images/Electronique/clavier.jpg"
        },
        {
            titre: "IPhone 12",
            categorie: "Electronique",
            prix: "500000",
            devise: "FCFA",
            url: "Images/Electronique/iphone12.jpg"
        },
        {
            titre: "Manette",
            categorie: "Electronique",
            prix: "15000",
            devise: "FCFA",
            url: "Images/Electronique/manette.jpg"
        },
        {
            titre: "Playstation 5",
            categorie: "Electronique",
            prix: "300000",
            devise: "FCFA",
            url: "Images/Electronique/play.jpg"
        },
        {
            titre: "Ring Light",
            categorie: "Electronique",
            prix: "15000",
            devise: "FCFA",
            url: "Images/Electronique/ring.jpg"
        },
        {
            titre: "Switch",
            categorie: "Electronique",
            prix: "180000",
            devise: "FCFA",
            url: "Images/Electronique/switch.jpg"
        },
        {
            titre: "Voile",
            categorie: "Femme",
            prix: "3000",
            devise: "FCFA",
            url: "Images/Femme/hijab.jpg"
        },
        {
            titre: "Pantalon",
            categorie: "Femme",
            prix: "3000",
            devise: "FCFA",
            url: "Images/Femme/pantalon.jpg"
        },
        {
            titre: "Robe",
            categorie: "Femme",
            prix: "13000",
            devise: "FCFA",
            url: "Images/Femme/robe.jpg"
        },
        {
            titre: "Talon",
            categorie: "Femme",
            prix: "10000",
            devise: "FCFA",
            url: "Images/Femme/talon.jpg"
        },
        {
            titre: "Basket",
            categorie: "Homme",
            prix: "20000",
            devise: "FCFA",
            url: "Images/Homme/basket.jpg"
        },
        {
            titre: "Costume",
            categorie: "Homme",
            prix: "40000",
            devise: "FCFA",
            url: "Images/Homme/costume.jpg"
        },
        {
            titre: "Pull",
            categorie: "Homme",
            prix: "10000",
            devise: "FCFA",
            url: "Images/Homme/pull.jpg"
        },
        {
            titre: "Tshirt",
            categorie: "Homme",
            prix: "3000",
            devise: "FCFA",
            url: "Images/Homme/tshirt.jpg"
        }
    ];
    res.status(200).json(allArticle);
    console.log("Réponse envoyée !");
    next();
});

app.use((req, res) => {
    console.log("Merci de votre passage !");
    res.end();
})

module.exports = app;