const { MessageEmbed } = require("discord.js");
const config = require("../../data/config.json");
const data = require("../../data/data.json");

module.exports = {
  name: "add",
  aliases: [],
  category: "information",
  description: "Este comando sirve para enviar la inavitacion del servidor",
  run: async (bot, message, args) => {
    const roleName = args[0];
    if (!roleName)
      return message.channel.send({
        embed: {
          color: data.color.red,
          description: `${data.emoji.x} | Uso incorrecto \nUso: \`${config.prefix}add <rol>\``,
        },
      });

    if (roleName === "fw") {
      const fw = "759860749375242300";
      if (message.member.roles.cache.get(fw))
        return message.channel.send({
          embed: {
            color: data.color.red,
            description: `${data.emoji.x} | Ya tienes este rol`,
          },
        });
      message.member.roles.add(fw);

      const embed = new MessageEmbed().setColor(data.color[1]).setDescription(
        `
        **Español:**
        ${data.emoji.es} | El rol \`Friendly War\` fue agregado correctamente
        
        **Ingles:**
        ${data.emoji.us} | \`Friendly War\` role was added successfully
        `
      );
      return message.channel.send(embed);
    } else if (roleName == "cc") {
      const cc = "657777107593592854";
      if (message.member.roles.cache.get(cc))
        return message.channel.send({
          embed: {
            color: data.color.red,
            description: `${data.emoji.x} | Ya tienes este rol`,
          },
        });
      message.member.roles.add(cc);

      const embed = new MessageEmbed().setColor(data.color[1]).setDescription(
        `
          **Español:**
          ${data.emoji.es} | El rol \`Creador de contenido\` fue agregado correctamente
          
          **Ingles:**
          ${data.emoji.us} | \`Content Creator\` role was added successfully
          `
      );
      return message.channel.send(embed);
    }

    message.channel.send({
      embed: {
        color: data.color.red,
        description: `${data.emoji.x} | Opcion incorrecta.`,
      },
    });
  },
};
