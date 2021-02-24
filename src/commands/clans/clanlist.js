const { MessageEmbed } = require("discord.js");

const data = require("../../data/data.json");

module.exports = {
  name: "clanlist",
  aliases: [],
  category: "clans",
  description: "Este comando sirve para probar",
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send({
        embed: {
          color: data.color.red,
          description: `No tienes permisos necesarios`,
        },
      });
    const Clan = require("../../models/clan_E-Sports");

    const clans = await Clan.find();

    let clanList = [];

    const clan = clans.values();

    const number = await Clan.countDocuments();

    for (let i = 0; i < number; i++) {
      const a = clan.next().value;

      const r = `[${
        a.tag1
      }](https://link.clashofclans.com/es?action=OpenClanProfile&tag=${a.tag1.slice(
        1
      )}) | ${a.name}`;

      clanList.push(r);
    }

    console.log(clanList.length);
    if (clanList.length < 40) {
      const embed = new MessageEmbed()
        .setTitle("Clan list")
        .setDescription(clanList.join("\n"))
        .setFooter(`Registered clans: ${number}`)
        .setColor(data.color[1]);

      return message.channel.send(embed);
    } else {
      const embed1 = new MessageEmbed()
        .setTitle("Clan list")
        .setDescription(clanList.slice(1, 20).join("\n"))
        .setColor(data.color[1]);

      const embed2 = new MessageEmbed()
        .setDescription(clanList.slice(21, 40).join("\n"))
        .setColor(data.color[1]);

      const embed3 = new MessageEmbed()
        .setDescription(clanList.slice(66, 100).join("\n"))
        .setFooter(`Registered clans: ${number}`)
        .setColor(data.color[1]);

      message.channel.send(embed1);
      message.channel.send(embed2);
      message.channel.send(embed3);
    }
  },
};
