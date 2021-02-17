const { MessageEmbed } = require("discord.js");
const data = require("../../data/data.json");

module.exports = {
  name: "twitter",
  aliases: [],
  category: "information",
  description: "Este comando sirve para enviar la inavitacion del servidor",
  run: async (bot, message, args) => {
    const embed = new MessageEmbed().setColor(data.color[1]).setDescription(`
    **Español:**
    ${data.emoji.es} | Siguenos en Twitter https://twitter.com/cup_wizard
    
    **Ingles:**
    ${data.emoji.us} | Follow us on Twitter https://twitter.com/cup_wizard
    `);

    message.channel.send(embed);
  },
};
