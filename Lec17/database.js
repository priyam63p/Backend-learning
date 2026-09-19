const mongoose = require("mongoose");

async function main(params) {
  await mongoose.connect(
    `mongodb+srv://patrapriyom_db_user:m4SR4aNR230G2FLL@firstproject.5dhthed.mongodb.net/Instagram`
  );
}

module.exports = main;
