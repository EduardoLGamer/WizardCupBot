const data = require("../../data/data.json");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const clashOfClans = require("clash-of-clans-api");
const config = require("../../data/config.json");
const secret = require("../../data/secret.json");

module.exports = {
  name: "moreInfo",
  aliases: [],
  category: "developer",
  description: "Este comando sirve para probar",
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send({
        embed: {
          color: data.color.red,
          description: `No tienes permisos necesarios`,
        },
      });
    const tag = args.join(" ");
    if (!tag)
      return message.channel.send({
        embed: {
          color: data.color.red,
          description: `${data.emoji.es} Uso incorrecto \`${config.prefix}searchClan <nombre>\`\n${data.emoji.us} Incorrect use \`${config.prefix}searchClan <name> \``,
        },
      });
    const clan = require("../../models/clan_E-Sports");

    const infoClan = await clan.findOne({ tag1: tag });

    if (!infoClan)
      return message.channel.send({
        embed: {
          color: data.color.red,
          description: `${data.emoji.es} Este clan no esta registrado\n${data.emoji.us} This clan is not registered`,
        },
      });

    const CoC = clashOfClans({
      token: secret.ClashOfClans.token,
    });
    const membersArray = infoClan.memberList;
    let members = "";

    for (let member of membersArray) {
      const info = await CoC.playerByTag(member)
        .then((info) => {
          let level = info.townHallLevel;
          if (!info.townHallLevel) {
            level = "0";
          }

          let name = info.name;

          if (!info.name) {
            name = "Sin nombre";
          }

          members = `${members} ${level} | ${member} | ${name}\n`;
        })

        .catch((e) => {
          members = `${members} ${member} | No data \n`;
        });
    }

    let logo = infoClan.logo;
    if (!logo) {
      logo = new MessageAttachment("../img/logo.png");
    }

    const embed = new MessageEmbed()
      .setColor(data.color[1])
      .setDescription(
        `Name: ${infoClan.name}\nDescription: ${infoClan.description}\n\nTag 1 : ${infoClan.tag1}\nTag 2 : ${infoClan.tag2}\n\nRepresentative 1: <@${infoClan.representative1}>\nRepresentative 2: <@${infoClan.representative2}>\n\nMembers: \n${members}\n\nOwner: ${infoClan.ownerID}`
      )
      .setThumbnail(logo);

    message.channel.send(embed);
  },
};
