const { MessageEmbed } = require("discord.js");
const data = require("../../data/data.json");
module.exports = {
  name: "reglas",
  aliases: [],
  category: "information",
  description: "Este comando sirve para enviar la inavitacion del servidor",
  run: async (bot, message, args) => {
    const embed = new MessageEmbed()
      .setColor(data.color[1])
      .setDescription(
        `[REGLAS SEASON 3](https://docs.google.com/document/d/1LVK6OaV1IVc_KRqBDpZMiHoKPhiW3lA9P0Z1DTHF29Y/edit?usp=drivesdk)`
      );

    message.channel.send(embed);
  },
};
