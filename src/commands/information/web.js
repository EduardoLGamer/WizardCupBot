const { MessageEmbed } = require("discord.js");
const data = require("../../data/data.json");

module.exports = {
  name: "web",
  aliases: [],
  category: "information",
  description: "Este comando sirve para enviar la inavitacion del servidor",
  run: async (bot, message, args) => {
    const embed = new MessageEmbed().setColor(data.color[1]).setDescription(`
    **Español:**
    ${data.emoji.us} |  Eche un vistazo a nuestro sitio web https://wizardcup.tk
    
    **Ingles:**
    ${data.emoji.es} |  Take a look at our website https://wizardcup.tk
    `);

    message.channel.send(embed);
  },
};
