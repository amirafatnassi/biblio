const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LivreSchema = new Schema(
  {
    titre: { type: String, 
      required: [true, "titre de livre est obligatoire"] },
    auteur: {
      type: String,
      required: [true, "auteur de livre est obligatoire"],
    },
    categorie: {
      type: String,
      required: [true, "categorie du livre est obligatoire"],
    },
    description: {
      type: String,
      required: [true, "la description du livre est obligatoire"],
    },
    contenu: String,
  },
  { timestamps: true, versionKey: false }
);

const livres = mongoose.model("Livre", LivreSchema);
module.exports = livres;
