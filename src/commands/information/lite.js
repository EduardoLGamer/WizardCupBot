const { MessageEmbed } = require("discord.js");

const data = require("../../data/data.json");
module.exports = {
  name: "lite",
  aliases: [],
  category: "information",
  description: "Este comando sirve para probar",
  run: async (bot, message, args) => {
    const embed = new MessageEmbed()
      .setTitle("DIVISIÓN LITE")
      .setDescription(
        `
[ALKILADOS](https://link.clashofclans.com/es?action=OpenClanProfile&tag=9RG0R29L)
[ARGENTINA 1986](https://link.clashofclans.com/es?action=OpenClanProfile&tag=2YY8JR98Q)
[ASSASSINS](https://link.clashofclans.com/es?action=OpenClanProfile&tag=29G220CPY)
[BLOOD BROTHERS](https://link.clashofclans.com/es?action=OpenClanProfile&tag=P8L2QGQ9)
[COLDRAVER](https://link.clashofclans.com/es?action=OpenClanProfile&tag=29C22PJGR)
[EL CAÑERO 2.0](https://link.clashofclans.com/es?action=OpenClanProfile&tag=2U9CQ90R)
[ENVY US](https://link.clashofclans.com/en?action=OpenClanProfile&tag=2YJ8R9CP2)
[EVIL WITCHES](https://link.clashofclans.com/pt?action=OpenClanProfile&tag=29JJQCLLG)
[HALCONES WAUFF](https://link.clashofclans.com/es?action=OpenClanProfile&tag=LPYJUPGY)
[KNIGHTS DARK](https://link.clashofclans.com/en?action=OpenClanProfile&tag=YQCCL09Q)
[LOS INTOCABLES](https://link.clashofclans.com/es?action=OpenPlayerProfile&tag=20UGLGCUJ)
[LEGION TICA](https://link.clashofclans.com/?action=OpenClanProfile&tag=2JJR8VGV)
[ORIGINALZ](https://link.clashofclans.com/es?action=OpenClanProfile&tag=YPUCVG0P)
[EXILIADOS](https://link.clashofclans.com/es?action=OpenClanProfile&tag=2YVPJUQYP)
[SUICIDAL HEROS](https://link.clashofclans.com/es?action=OpenClanProfile&tag=29GL9JCGY)
[TEAM LATINA](https://link.clashofclans.com/es?action=OpenClanProfile&tag=20VV9YCJ)
[VIRUS 502](https://link.clashofclans.com/es?action=OpenClanProfile&tag=2P9PL29CY)
[WARASYLUM哥斯达黎加](https://link.clashofclans.com/es?action=OpenClanProfile&tag=28PU0JYC0)
[ZOLOKOTROKOTOP](https://link.clashofclans.com/es?action=OpenClanProfile&tag=RG2QCG8)
[GIRLS ONLY](https://link.clashofclans.com/es?action=OpenClanProfile&tag=28CGQ22RC)
          `
      )
      .setColor(data.color[1]);

    message.channel.send(embed);
  },
};
