const { readdirSync } = require("fs");
module.exports = (bot) => {
  const load = (dirs) => {
    const events = readdirSync(`./events/${dirs}/`).filter((d) =>
      d.endsWith(".js")
    );

    for (let file of events) {
      const event = require(`../events/${dirs}/${file}`);

      const eventName = file.split(".")[0];

      bot.on(eventName, event.bind(null, bot));
    }
  };

  ["client", "guild"].forEach((x) => load(x));
  console.log("[INFO] Event module loaded successfully".yellow);
};
