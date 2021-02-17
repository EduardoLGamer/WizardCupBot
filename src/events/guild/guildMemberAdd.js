const { MessageEmbed } = require("discord.js");

const data = require("../../data/data.json");
const config = require("../../data/config.json");

module.exports =
  ("guildMemberAdd",
  (client, member) => {
    member.roles.add(config.welcomeRol);

    const embed = new MessageEmbed()
    .setColor(data.color[1])
      .setDescription(
        `
   ** Español:**
    Bienvenido <@${member.id}> a Wizard Cup! Recuerda leer las <#740719441494409308>
   
   **English:**
   Welcome <@${member.id}> to Wizard Cup!  Remember to read the <#740719441494409308>
    `
      )
      .setThumbnail(`https://cdn.discordapp.com/avatars/${member.id}/${member.user.avatar}.png?size=512`)
     

    client.channels.cache.get(config.welcomeChannel).send(embed);
  });
