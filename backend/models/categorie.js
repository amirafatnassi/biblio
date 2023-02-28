const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorieSchema = new Schema(
  {
    nomCategorie:{ type: String, required: [true, "nom de cateforie est obligatoire"] },
    listeDesLivres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Livre" }]
  },
  { timestamps: true, versionKey: false }
);

const categories = mongoose.model("Categorie", CategorieSchema);
module.exports = categories;
