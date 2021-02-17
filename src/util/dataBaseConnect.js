const moongose = require("mongoose");
const colors = require("colors");

require("dotenv").config();

moongose.connect(process.env.MongoDB_URL, {
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
