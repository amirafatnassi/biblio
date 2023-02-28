const livres = require("../models/livre");
const categories = require("../models/categorie");

const fs = require("fs");
const ejs = require("ejs");
const path = require("path");

exports.getLivres = async (req, res) => {
  try {
    const result = await livres.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.getLivre = async (req, res) => {
  try {
    const livre = await livres.findById(req.params.id);
    if (livre) {
      res.status(200).send(livre);
    } else {
      res.status(401).send("livre n'existe pas !");
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.addLivre = async (req, res) => {
  try {
    if (req.file) {
      req.body.contenu = req.file.filename;
    }
    const livre = await livres.create(req.body);
    //ajouter le livre à la liste des livres de la catégorie  en question
    await categories.findOneAndUpdate(
      { nomCategorie: req.body.categorie },
      {
        $push: { listeDesLivres: livre._id },
      }
    );
    res.status(200).send(livre);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.updateLivre = async (req, res) => {
  try {
    const liv = await livres.findById(req.params.id);

    //supprimer le livre à la liste des livre de l'ancienne catégorie
    await categories.findOneAndUpdate(
      { nomCategorie: liv.categorie },
      {
        $pull: { listeDesLivres: req.params.id },
      }
    );
    if (req.file) {
      req.body.contenu = req.file.filename;
    }
    await livres.findByIdAndUpdate(req.params.id, req.body);
    const updatedLivre = await livres.findById(req.params.id);

    //ajouter le livre à la liste des livre de la catégorie  en question
    await categories.findOneAndUpdate(
      { nomCategorie: req.body.categorie },
      {
        $push: { listeDesLivres: req.params.id },
      }
    );

    res.status(200).send(updatedLivre);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};

exports.deleteLivre = async (req, res) => {
  try {
    const liv = await livres.findById(req.params.id);

    //supprimer le livre de la liste des livre de l'ancienne catégorie
    await categories.findOneAndUpdate(
      { nomCategorie: liv.categorie },
      {
        $pull: { listeDesLivres: req.params.id },
      }
    );
    fs.unlink("pdfFolder/" + liv.contenu, (err) => {
      if (err) {
        throw err;
      }
    });
    const deletedLivre = await livres.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedLivre);
  } catch (error) {
    res.status(500).send({ message: error.message || "erreur serveur" });
  }
};