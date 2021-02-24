const data = require("../../data/data.json");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const clashOfClans = require("clash-of-clans-api");
const config = require("../../data/config.json");

module.exports = {
  name: "clanEdit",
  aliases: [],
  category: "clan",
  description: "Este comando sirve para probar",
  run: async (bot, message, args) => {
    const tag = args[0];
    if (!tag)
      return message.channel.send({
        embed: {
          color: data.color.red,
          description: `${data.emoji.es} Uso incorrecto \`${config.prefix}clanEdit <tag> <campo> <nuevo dato>\`\n${data.emoji.us} Incorrect use \`${config.prefix}clanEdit <tag> <fact> <new data>\``,
        },
      });
    const edit = args[1];
    if (!edit)
      return message.channel.send({
        embed: {
          color: data.color.red,
          description: `${data.emoji.es} Uso incorrecto \`${config.prefix}clanEdit <tag> <campo> <nuevo dato>\`\n${data.emoji.us} Incorrect use \`${config.prefix}clanEdit <tag> <fact> <new data>\``,
        },
      });
    const newData = args.slice(2).join(" ");
    if (!newData)
      return message.channel.send({
        embed: {
          color: data.color.red,
          description: `${data.emoji.es} Uso incorrecto \`${config.prefix}clanEdit <tag> <campo> <nuevo dato>\`\n${data.emoji.us} Incorrect use \`${config.prefix}clanEdit <tag> <fact> <new data>\``,
        },
      });

    const clan = require("../../models/clan_E-Sports");

    const infoClan = await clan.findOne({ tag1: tag });
    if (!infoClan)
      return message.channel.send({
        embed: {
          color: data.color.red,
          description: `${data.emoji.es} Este clan no se encuentra registrado\n${data.emoji.us} This clan is not registered`,
        },
      });

    if (
      /*message.author.id != config.ownerID ||*/
      message.author.id !== infoClan.ownerID
    )
      return message.channel.send({
        embed: {
          color: data.color.red,
          description: `${data.emoji.es} Solo la persona que registro el clan puede editar la informacion\n${data.emoji.us} Only the person who registered the clan can edit the information`,
        },
      });

    if (edit === "name") {
      const info = await clan.findOne({ name: edit });
      if (info)
        return message.channel.send({
          embed: {
            color: data.color.red,
            description: `${data.emoji.es} Ya existe un clan con ese nombre\n${data.emoji.us} There is already a clan with that name`,
          },
        });

      infoClan.name = newData;

      infoClan.save();

      return message.channel.send({
        embed: {
          color: data.color.red,
          description: `${data.emoji.es} Datos actualizados\n${data.emoji.us} Updated data`,
        },
      });
    }
  },
};
