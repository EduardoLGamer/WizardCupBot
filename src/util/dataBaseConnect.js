const moongose = require("mongoose");
const colors = require("colors");
const secret = require("../data/secret.json");

moongose.connect(secret.MongoDB.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

moongose.connection.on("open", () => {
  console.log("[INFO] Connected database".green);
});

moongose.connection.on("error", (error) => {
  console.log(`[ERROR] ${error}`.red);
});
