const { readdirSync } = require("fs");

module.exports = (bot) => {
  readdirSync("./commands/").forEach((dir) => {
    const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
      file.endsWith(".js")
    );
    for (const file of commands) {
      const pull = require(`../commands/${dir}/${file}`);

      if (pull.name) {
        bot.commands.set(pull.name, pull);
      } else {
        console.log(`[ERROR] Command ${file} could not be loaded`);
        continue;
      }

      if (pull.aliases && Array.isArray(pull.aliases)) {
        pull.aliases.forEach((alias) => bot.aliases.set(alias, pull.name));
      }
    }
  });

  console.log("[INFO] Command module loaded successfully".yellow);
};
