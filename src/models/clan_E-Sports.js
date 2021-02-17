const { Schema, model } = require("mongoose");

const clan_ESports_Schema = new Schema({
  name: String,
  description: String,
  ownerID: String,
  tag1: String,
  tag2: String,
  representative1: String,
  representative2: String,
  twitter: String,
  logo: String,
  memberList: Array,
});

module.exports = model("clans", clan_ESports_Schema);
