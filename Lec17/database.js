const mongoose = require("mongoose");

async function main(params) {
  await mongoose.connect(
    `mongodb+srv://patrapriyom_db_user:<db_password>@firstproject.5dhthed.mongodb.net/Instagram`
  );
}

module.exports = main;
