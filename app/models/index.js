const dbConfig = require("../config/db.config.js");
const db = {};

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;
