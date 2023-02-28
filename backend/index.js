const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const path = require("path");
const CronJob = require("cron").CronJob;
const port = 4000;
const users=require('./models/user');
require("./db/connect");
require("./passport-strategies/bearer");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "52428800" }));
app.use(
  bodyParser.urlencoded({
    limit: "52428800",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/pdfFolder", express.static(path.join(__dirname, "pdfFolder")));

app.use("/users", require("./Routes/user"));
app.use("/livres", require("./Routes/livre"));
app.use("/categories", require("./Routes/categorie"));

async function resetDownloads() {
  try {
    await users.updateMany({}, { downloads: 0 });
  } catch (err) {
    console.error(err);
  }
};

const job = new CronJob(' 0 0 1 * *', resetDownloads, null, true, 'America/New_York');
job.start();

app.listen(port, function () {
  console.log("app serving on port:", port);
});
