const Discord = require("discord.js");

const config = require("../../data/config.json");
const data = require("../../data/data.json");

module.exports = async (bot, message) => {
  if (message.author.bot) return;

  const messageArray = message.content.split(" ");
  const command = messageArray[0];
  const args = messageArray.slice(1);

  const prefix = config.prefix;

  if (!command.startsWith(prefix)) return;

  const cmd = bot.commands.get(command.slice(prefix.length));

  if (!cmd) {
    return message.channel
      .send({
        embed: {
          color: data.color.red,
          description: `${data.emoji.x} | Este comando no existe`,
        },
      })
      .then((message) => {
        message.delete({ timeout: 3500 });
      });
  }

  cmd.run(bot, message, args);
};
