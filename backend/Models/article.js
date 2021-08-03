const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    titre: { type: String, required: true },
    prix: { type: String, required: true },
    categorie: { type: String, required: true },
    devise: { type: String, required: true },
});

module.exports = mongoose.model('Article', articleSchema);