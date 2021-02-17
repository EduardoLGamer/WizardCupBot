const { MessageEmbed } = require("discord.js");

const data = require("../../data/data.json")
module.exports = {
  name: "calendario",
  aliases: [],
  category: "information",
  description: "Este comando sirve para probar",
  run: async (bot, message, args) => {
    const embed = new MessageEmbed()
      .setTitle("CALENDARIO")
      .setColor(data.color[1])
      .addField("Jornada 1", "`26/10 al 01/11`")
      .addField("Jornada 2", "`02/11 al 08/11`")
      .addField("Jornada 3", "`09/11 al 15/11`")
      .addField("Jornada 4", "`16/11 al 22/11`")
      .addField("Jornada 5", "`23/11 al 29/11`")
      .addField("PLAYOFF", "-------")
      .addField("4tos. de final", "`30/11 al 06/12`")
      .addField("SemiFinal", "`07/12 al 13/12`")
      .addField("Gran Final", "`14/12 al 20/12`");
    message.channel.send(embed);
  },
};
