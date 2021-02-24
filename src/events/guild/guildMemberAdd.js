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
> 🇪🇸 **Bienvenido a Wizard Cup!**
¡Estamos felices de que estés aquí!
Visita <#811197462026387476> para obtener información del torneo y recuerda leer las <#740719441494409308> del servidor.

Pronto damos inicio a una nueva temporada, así que atento a <#741035963924480009> para no perderte nada y si tienes alguna duda escríbenos en <#811017713828102154> que estaremos pendientes a todas tus dudas.

**SIGUENOS EN:**
WEBSITE: https://wizardcup.tk
TWITTER: https://twitter.com/cup_wizard

> 🇺🇸 **Welcome to Wizard Cup!**
We are happy that you are here!
Visit <#811197462026387476> for tournament information and remember to read the <#740719441494409308> from the server.

We will soon start a new season, so pay attention to <#741035963924480009> so as not to miss anything and if you have any questions write to us at <#811017713828102154> that we will be waiting for all your questions.

 **FOLLOW US ON:**
 WEBSITE: <https://wizardcup.tk>
 TWITTER: <https://twitter.com/cup_wizard>
    `
      )
      .setThumbnail(
        `https://cdn.discordapp.com/avatars/${member.id}/${member.user.avatar}.png?size=512`
      );

    client.channels.cache.get(config.welcomeChannel).send(embed);
  });
