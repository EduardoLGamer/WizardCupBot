const { MessageEmbed } = require("discord.js");
const data = require("../../data/data.json");
const config = require("../../data/config.json");

module.exports = {
  name: "cmd",
  aliases: [],
  category: "information",
  description: "Este comando sirve para enviar la inavitacion del servidor",
  run: async (bot, message, args) => {
    const embed = new MessageEmbed()
      .setColor(data.color[1])
      .setTitle("Comandos").setDescription(`

      - **${config.prefix}reglas**

      ${data.emoji.es} Mira las reglas
      ${data.emoji.us} Look at the rules

      - **${config.prefix}invite** 

      ${data.emoji.es} Mira la invitacion al servidor
      ${data.emoji.us} Look at the invitation to the server

      - **${config.prefix}calendario** 

      ${data.emoji.es} Mira el calendario
      ${data.emoji.us} Look at the calendar

      - **${config.prefix}heavy** 

      ${data.emoji.es} Enlaces a los clanes Heavy
      ${data.emoji.us} Links to Heavy clans

      - **${config.prefix}eheavy** 

      ${data.emoji.es} Enfrentamientos Heavy
      ${data.emoji.us} Heavy Clashes

      - **${config.prefix}lite**

      ${data.emoji.es} Enlaces a los clanes Lite
      ${data.emoji.us} Links to Lite clans

      - **${config.prefix}elite**

      ${data.emoji.es} Enfrentamientos Lite
      ${data.emoji.us} Lite Clashes
      `);
    message.channel.send(embed);
  },
};
