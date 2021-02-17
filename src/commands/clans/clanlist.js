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
    const Clan = require("../../models/clan");

    const clans = await Clan.find();

    let clanList = "";

    const clan = clans.values();

    const number = await Clan.countDocuments();

    for (let i = 0; i < number; i++) {
      const a = clan.next().value;

      const r = `${a.tag1} | ${a.name}\n`;

      clanList = `${clanList} ${r}`;
    }

    const embed = new MessageEmbed()
      .setTitle("Clan list")
      .setDescription(clanList)
      .setFooter(`Registered clans: ${number}`)
      .setColor(data.color[1]);

    message.channel.send(embed);
  },
};
