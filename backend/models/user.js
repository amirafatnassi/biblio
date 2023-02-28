const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, required: [true, "email est obligatoire"] },
    password: { type: String, required: [true, "mot de passe obligatoire"] },
    address: String,
    role: {
      type: String,
      enum: ["Admin", "Abonne", "Normal"],
      default: "Normal",
    },
    downloads: { type: Number, default: 0 },
  },
  { timestamps: true, versionKey: false }
);

const users = mongoose.model("User", UserSchema);
module.exports = users;
