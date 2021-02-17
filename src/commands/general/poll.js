const { MessageEmbed } = require("discord.js");
const data = require("../../data/data.json");

module.exports = {
  name: "poll",
  aliases: [],
  category: "general",
  description: "Este comando sirve para enviar la inavitacion del servidor",
  run: async (bot, message, args) => {
    const channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send({
        embed: {
          color: data.color.red,
          description: `${data.emoji.x} | Menciona un canal donde quieras enviar la encuesta`,
        },
      });

    const poll = args.slice(1).join(" ");
    if (!poll)
      return message.channel.send({
        embed: {
          color: data.color.red,
          description: `${data.emoji.x} | Falta especificar la pregunta`,
        },
      });

    const embed = new MessageEmbed()
      .setTitle("WIZARD CUP - SEASON 4")
      .setDescription(poll)
      .setColor(data.color[1]);

    channel.send(embed).then((message) => {
      message.react("👍");
      message.react("👎");
    });
  },
};
