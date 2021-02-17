const { MessageEmbed } = require("discord.js");
const data = require("../../data/data.json");
module.exports = {
  name: "invite",
  aliases: [],
  category: "information",
  description: "Este comando sirve para enviar la inavitacion del servidor",
  run: async (bot, message, args) => {
    const embed = new MessageEmbed().setColor(data.color[1]).setDescription(`
    **Español:**
    ${data.emoji.es} | Invitacion: https://discord.gg/kWswVWf
    
    **Ingles:**
    ${data.emoji.us} | Invitation: https://discord.gg/kWswVWf
    `);

    message.channel.send(embed);
  },
};
