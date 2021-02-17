const { MessageEmbed } = require("discord.js");
const data = require("../../data/data.json");

module.exports = {
  name: "heavy",
  aliases: [],
  category: "information",
  description: "Este comando sirve para enviar la inavitacion del servidor",
  run: async (bot, message, args) => {
    const embed = new MessageEmbed()
      .setColor(data.color[1])
      .setTitle("DIVISIÓN HEAVY")
      .setDescription(
        `
			[ACE OF SPADES](https://link.clashofclans.com/es?action=OpenClanProfile&tag=29CQCQCCU)
[BAD BOYS](https://link.clashofclans.com/es?action=OpenClanProfile&tag=9V8JLPJ9)
[BL∆CK DI∆MOND](https://link.clashofclans.com/en?action=OpenClanProfile&tag=29GQQ9GVL)
[GOD LEVEL](https://link.clashofclans.com/es?action=OpenClanProfile&tag=29YVYJ9LP)
[GUERREROS Z 3](https://link.clashofclans.com/es?action=OpenClanProfile&tag=UGGPCYU)
[HISPANICHUNTERS](https://link.clashofclans.com/es?action=OpenClanProfile&tag=2PVV2JPL0)
[HEAVEN'§QUEEN§](https://link.clashofclans.com/es?action=OpenClanProfile&tag=2Y09JUJ9R)
[LA GUARDIA REAL](https://link.clashofclans.com/es?action=OpenClanProfile&tag=GRRR0U9J)
[LA MASACUATA](https://link.clashofclans.com/?action=OpenClanProfile&tag=VLVRY0JG)
[LEYENDA ROJA](https://link.clashofclans.com/es?action=OpenClanProfile&tag=288PL29UU)
[LIGA PARAGUAYA](https://link.clashofclans.com/es?action=OpenClanProfile&tag=LJ8P90RQ)
[LINZACOS](https://link.clashofclans.com/es?action=OpenClanProfile&tag=9P9YG2R)
[LOS PITUFOS](https://link.clashofclans.com/es?action=OpenClanProfile&tag=8PG022VG)
[MARCA PERU 3.3](https://link.clashofclans.com/es?action=OpenClanProfile&tag=209LUY2V)
[NHANDEI ZHA](https://link.clashofclans.com/?action=OpenClanProfile&tag=LLCJUG0)
[NUEVO LAREDO](https://link.clashofclans.com/es?action=OpenClanProfile&tag=PPPUQYG)
[STONE AGE!!](https://link.clashofclans.com/es?action=OpenClanProfile&tag=PPLCV0VU)
[TERROR HISPANO](https://link.clashofclans.com/es?action=OpenClanProfile&tag=QRJ28RQY)
[对你×ИООВS×在这](https://link.clashofclans.com/es?action=OpenClanProfile&tag=Q8VVL0RU)
[☇NI<A☇](https://link.clashofclans.com/es?action=OpenClanProfile&tag=VJVQQ0Y9)
			`
      );
    message.channel.send(embed);
  },
};
