const categories = require("../models/categorie");

exports.getCategories = async (req, res) => {
  try {
    const result = await categories.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.getCategorie = async (req, res) => {
  try {
    const categorie = await categories.findById(req.params.id).populate("listeDesLivres");
    if (categorie) {
      res.status(200).send(categorie);
    } else {
      res.status(401).send("categorie n'existe pas !");
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.addCategorie = async (req, res) => {
  try {
    const categorie = await categories.create(req.body);
    res.status(200).send(categorie);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.updateCategorie = async (req, res) => {
  try {
    await categories.findByIdAndUpdate(req.params.id, req.body);
    const updatedCategorie = await categories.findById(req.params.id);
    res.status(200).send(updatedCategorie);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.deleteCategorie = async (req, res) => {
  try {
    const deletedCategorie = await categories.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedCategorie);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};
