const { MessageEmbed } = require("discord.js");
const data = require("../../data/data.json");
const embed = require("../../util/embeds");
const config = require("../../data/config.json");
const secret = require("../../data/secret.json");

const clashOfClans = require("clash-of-clans-api");

module.exports = {
  name: "register",
  aliases: [],
  category: "clans",
  description: "Este comando sirve para probar",
  run: async (bot, message, args) => {
    const channelName = `「✅」registro-${message.author.id}`;
    const everyone = message.guild.roles.cache.find(
      (a) => a.name === "@everyone"
    );

    /**
     * Save all
     */

    let clanName = "";
    let clanTag1 = "";
    let clanTag2 = "";
    let clanRepresentative = "";
    let clanRepresentative2 = "";
    let clanLogo = "";
    let clanMembersNumber = null;
    let clanMembers = [];
    let clanTwitter = "";
    let clanDivision = "";

    if (message.guild.channels.cache.find((c) => c.name == channelName))
      return message.channel.send({
        embed: {
          color: data.color.red,
          description: `
${data.emoji.es} | Ya tienes un registro creado
${data.emoji.us} | You already have a record created
          `,
        },
      });

    await message.guild.channels.create(channelName, {
      type: "text",
      permissionOverwrites: [
        {
          id: everyone.id,
          deny: ["VIEW_CHANNEL"],
        },
        {
          id: message.author.id,
          allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "ATTACH_FILES"],
        },
      ],
    });
    const channel = message.guild.channels.cache.find(
      (r) => r.name === channelName
    );

    message.channel.send({
      embed: {
        color: data.color[1],
        description: `
${data.emoji.es} | Se creo un canal por donde tienes que registrarte
${data.emoji.us} | A channel was created where you have to register

            ────> <#${channel.id}> <────
            `,
      },
    });

    channel.send(embed.main);
    channel.send(embed.clanName);

    const filter = (m) => m.author.id === message.author.id;

    const CoC = clashOfClans({
      token: secret.ClashOfClans.token,
    });

    const clan = require("../../models/clan_E-Sports");

    const clanNameCollector = channel.createMessageCollector(filter);
    /*<──  ───────    CLAN-NAME   ───────  ──>*/
    clanNameCollector.on("collect", async (msg) => {
      const findClan = await clan.findOne({ name: msg.content });
      if (findClan)
        return channel.send({
          embed: {
            color: data.color.red,
            description: `${data.emoji.es} Este nombre ya se encuentra en uso #\n${data.emoji.us} This name is already in use`,
          },
        });
      clanName = msg.content;
      clanNameCollector.stop();

      /*<──  ───────    CLAN-TAG1   ───────  ──>*/
      channel.send(embed.clanTag1);

      const clanTag1Collector = channel.createMessageCollector(filter);
      clanTag1Collector.on("collect", async (msg) => {
        if (!msg.content.startsWith("#"))
          return channel.send({
            embed: {
              color: data.color.red,
              description: `${data.emoji.es} El tag debe comenzar con #\n${data.emoji.us} The tag must start with #`,
            },
          });
        const aTag1 = msg.content.toUpperCase();
        const tag1 = aTag1.replace(/O/g, "0");

        try {
          const findClan = await CoC.clanByTag(tag1);
        } catch (e) {
          return channel.send({
            embed: {
              color: data.color.red,
              description: `${data.emoji.es} El clan que proporcionaste no existe\n${data.emoji.us} The clan you provided does not exist`,
            },
          });
        }

        if (await clan.findOne({ tag1: tag1 }))
          return channel.send({
            embed: {
              color: data.color.red,
              description: `${data.emoji.es} Este clan ya esta registrado\n${data.emoji.us} This clan is already registered`,
            },
          });

        clanTag1 = tag1;
        clanTag1Collector.stop();

        /*<──  ───────    CLAN-TAG2   ───────  ──>*/
        channel.send(embed.clanTag2);

        const clanTag2Collector = channel.createMessageCollector(filter);
        clanTag2Collector.on("collect", async (msg) => {
          if (!msg.content.startsWith("#"))
            return channel.send({
              embed: {
                color: data.color.red,
                description: `${data.emoji.es} El tag debe comenzar con #\n${data.emoji.us} The tag must start with #`,
              },
            });
          const aTag2 = msg.content.toUpperCase();
          const tag2 = aTag2.replace(/O/g, "0");
          try {
            const findClan = await CoC.clanByTag(tag2);
          } catch (e) {
            return channel.send({
              embed: {
                color: data.color.red,
                description: `${data.emoji.es} El clan que proporcionaste no existe\n${data.emoji.us} The clan you provided does not exist`,
              },
            });
          }
          if (await clan.findOne({ tag2: tag2 }))
            return channel.send({
              embed: {
                color: data.color.red,
                description: `${data.emoji.es} Este clan ya esta registrado\n${data.emoji.us} This clan is already registered`,
              },
            });

          clanTag2 = tag2;
          clanTag2Collector.stop();

          /*<──  ───────    CLAN-REPRESENTATIVE   ───────  ──>*/
          channel.send(embed.clanRepresentative);

          const clanRepresentativeCollector = channel.createMessageCollector(
            filter
          );
          clanRepresentativeCollector.on("collect", async (msg) => {
            const searchUser = message.guild.members.resolve(msg.content);

            if (!searchUser)
              return channel.send({
                embed: {
                  color: data.color.red,
                  description: `${data.emoji.es} Este miembro no existe o no se encuentra en el servidor\nTip: Si se trata de un error dile al miembro que escriba cualquier mensaje en el chat\n${data.emoji.us} This member does not exist or is not on the server \nTip: If it is an error tell the member to write any message in the chat`,
                },
              });

            clanRepresentative = msg.content;
            clanRepresentativeCollector.stop();

            /*<──  ───────    CLAN-REPRESENTATIVE2   ───────  ──>*/
            channel.send(embed.clanRepresentative2);

            const clanRepresentative2Collector = channel.createMessageCollector(
              filter
            );
            clanRepresentative2Collector.on("collect", async (msg) => {
              const searchUser = message.guild.members.resolve(msg.content);

              if (!searchUser)
                return channel.send({
                  embed: {
                    color: data.color.red,
                    description: `${data.emoji.es} Este miembro no existe o no se encuentra en el servidor\nTip: Si se trata de un error dile al miembro que escriba cualquier mensaje en el chat\n${data.emoji.us} This member does not exist or is not on the server \nTip: If it is an error tell the member to write any message in the chat`,
                  },
                });
  
              clanRepresentative2 = msg.content;
              clanRepresentative2Collector.stop();

              /*<──  ───────    CLAN-LOGO   ───────  ──>*/
              channel.send(embed.clanLogo);

              const clanLogoCollector = channel.createMessageCollector(filter);
              clanLogoCollector.on("collect", async (msg) => {
                if (!msg.attachments.first())
                  return channel.send({
                    embed: {
                      color: data.color.red,
                      description: `${data.emoji.es} Para enviar el logo tienes que adjuntar la imagen\n${data.emoji.us} To send the logo you have to attach the image`,
                    },
                  });
                clanLogo = msg.attachments.first().url;
                clanLogoCollector.stop();

                /*<──  ───────    CLAN-MEMBERSNUMBER   ───────  ──>*/
                channel.send(embed.clanMembersNumber);

                const clanMembersNumberCollector = channel.createMessageCollector(
                  filter
                );
                clanMembersNumberCollector.on("collect", async (msg) => {
                  if (msg.content.length > 2)
                    return channel.send({
                      embed: {
                        color: data.color.red,
                        description: `${data.emoji.es} Numero Invalido\n${data.emoji.us} Invalid number`,
                      },
                    });

                  const x = ["6", "7", "8", "9", "10"];
                  if (!x.includes(msg.content))
                    return channel.send({
                      embed: {
                        color: data.color.red,
                        description: `${data.emoji.es} El numero de miembros debe ser de 6-10\n${data.emoji.us} The number of members must be 6-10`,
                      },
                    });

                  clanMembersNumber = parseFloat(msg.content);
                  clanMembersNumberCollector.stop();

                  /*<──  ───────    CLAN-MEMBERS   ───────  ──>*/
                  channel.send(embed.clanMembers);

                  const clanMembersCollector = channel.createMessageCollector(
                    filter
                  );
                  let status = 0;
                  clanMembersCollector.on("collect", async (msg) => {
                    if (!msg.content.startsWith("#"))
                      return channel.send({
                        embed: {
                          color: data.color.red,
                          description: `${data.emoji.es} El tag debe comenzar con #\n${data.emoji.us} The tag must start with #`,
                        },
                      });

                    try {
                      await CoC.playerByTag(msg.content);
                    } catch (e) {
                      return channel.send({
                        embed: {
                          color: data.color.red,
                          description: `${data.emoji.es} Este jugador no existe\n${data.emoji.us} This player does not exist`,
                        },
                      });
                    }
                    const x = await clan.findOne({ memberList: msg.content });
                    if (x)
                      return channel.send({
                        embed: {
                          color: data.color.red,
                          description: `${data.emoji.es} Este jugador ya esta registrado en un clan\n${data.emoji.us} This player is already registered in a clan`,
                        },
                      });
                    const findUser = await CoC.playerByTag(msg.content);

                    clanMembers.push(msg.content);
                    status = status + 1;

                    channel.send({
                      embed: {
                        color: data.color[1],
                        description: `Name: ${findUser.name} \nTag: ${msg.content}\nLevel: ${findUser.townHallLevel}`,
                      },
                    });

                    if (clanMembersNumber === status) {
                      clanMembersCollector.stop();

                      /*<──  ───────    CLAN-TWITTER  ───────  ──>*/
                      channel.send(embed.clanTwitter);

                      const clanTwitterCollector = channel.createMessageCollector(
                        filter
                      );
                      clanTwitterCollector.on("collect", async (msg) => {
                        clanTwitter = msg.content;
                        clanTwitterCollector.stop();

                        /*<──  ───────    CLAN-DESCRIPTION  ───────  ──>*/
                        channel.send(embed.clanDescription);

                        const clanDescriptionCollector = channel.createMessageCollector(
                          filter
                        );
                        clanDescriptionCollector.on("collect", async (msg) => {
                          clanDescription = msg.content;
                          clanDescriptionCollector.stop();
                          /*<──  ───────    SAVE IN DB  ───────  ──>*/

                          const clan_ESports = await new clan({
                            name: clanName,
                            description: clanDescription,
                            ownerID: message.author.id,
                            tag1: clanTag1,
                            tag2: clanTag2,
                            representative1: clanRepresentative,
                            representative2: clanRepresentative2,
                            twitter: clanTwitter,
                            logo: clanLogo,
                            memberList: clanMembers,
                          });
                          clan_ESports.save();
                          channel.send({
                            embed: {
                              color: data.color.red,
                              description: `${data.emoji.es} Clan registrado correctamente\n${data.emoji.us} Clan successfully registered`,
                            },
                          });

                          message.guild
                            .member(message.member)
                            .roles.add(config.eSportsRol);

                          setTimeout(() => channel.delete(), 3500);
                        });
                      });
                    }
                  });
                });
              });
            });
          });
        });
      });
    });
  },
};
