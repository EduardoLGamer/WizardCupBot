const { MessageEmbed } = require("discord.js");

const data = require("../../data/data.json");
const config = require("../../data/config.json");

module.exports = {
  name: "send",
  aliases: [],
  category: "administrator",
  description: "Este comando sirve para probar",
  run: async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send({
      embed: {
        color: data.color.red,
        description: `No tienes permisos necesarios`,
      },
    });
    const channel = message.mentions.channels.first();
    const ad = args.slice(1).join(" ");

    const embed = new MessageEmbed().setDescription(ad).setColor(data.color[1]);

    channel.send(embed);
  },
};
