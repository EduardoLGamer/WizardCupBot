const { MessageEmbed } = require(`discord.js`);

const data = require(`../data/data.json`);

module.exports = {
  main: new MessageEmbed().setColor(data.color[1]).setDescription(
    `
    ${data.emoji.es} | Bienvenido al sistema de registro de clanes
${data.emoji.us} | Welcome to the clan registration system
    `
  ),

  clanName: new MessageEmbed()
    .setColor(data.color[1])
    .setDescription(
      `
      ${data.emoji.es} | Escribe el nombre de tu clan
${data.emoji.us} | Write the name of your clan
      `
    )
    .setFooter(
      `: 1 / 9 | ${data.emoji.es} Tienes 5 minutos para responder cada pregunta - ${data.emoji.us} You have 5 minutes to answer each question `
    ),

  clanTag1: new MessageEmbed()
    .setColor(data.color[1])
    .setDescription(
      `
      ${data.emoji.es} | Escribe el tag de tu clan principal
${data.emoji.us} | Write your clan's first tag
      `
    )
    .setFooter(
      `: 2 / 9 | ${data.emoji.es} Tienes 5 minutos para responder cada pregunta - ${data.emoji.us} You have 5 minutes to answer each question `
    ),

  clanTag2: new MessageEmbed()
    .setColor(data.color[1])
    .setDescription(
      `
      ${data.emoji.es} | Escribe el tag de tu clan secundario
${data.emoji.us} | Write your clan's second tag
      `
    )
    .setFooter(
      `: 3 / 9 | ${data.emoji.es} Tienes 5 minutos para responder cada pregunta - ${data.emoji.us} You have 5 minutes to answer each question `
    ),
  clanRepresentative: new MessageEmbed()
    .setColor(data.color[1])
    .setDescription(
      `
      ${data.emoji.es} | Escribe la ID del discord de tu primer representante
${data.emoji.us} | Write the Discord ID of your first representative
      `
    )
    .setFooter(
      `: 4 / 9 | ${data.emoji.es} Tienes 5 minutos para responder cada pregunta - ${data.emoji.us} You have 5 minutes to answer each question `
    ),

  clanRepresentative2: new MessageEmbed()
    .setColor(data.color[1])
    .setDescription(
      `
      ${data.emoji.es} | Escribe el ID del discord de tu segundo representante
${data.emoji.us} | Write the Discord ID of your second representative
      `
    )
    .setFooter(
      `: 5 / 9 | ${data.emoji.es} Tienes 5 minutos para responder cada pregunta - ${data.emoji.us} You have 5 minutes to answer each question `
    ),

  clanLogo: new MessageEmbed()
    .setColor(data.color[1])
    .setDescription(
      `
      ${data.emoji.es} | Envia el logo de tu clan ( Adjunta la imagen )
${data.emoji.us} | Submit your clan's logo ( Attach the image )
      `
    )
    .setFooter(
      `: 6 / 9 | ${data.emoji.es} Tienes 5 minutos para responder cada pregunta - ${data.emoji.us} You have 5 minutes to answer each question `
    ),

  clanMembersNumber: new MessageEmbed()
    .setColor(data.color[1])
    .setDescription(
      `
      ${data.emoji.es} | ¿Cuantos miembros vas a registrar? (6 - 10)
${data.emoji.us} | How many members are you going to register? (6 - 10)
      `
    )
    .setFooter(
      `: 7 / 9 | ${data.emoji.es} Tienes 5 minutos para responder cada pregunta - ${data.emoji.us} You have 5 minutes to answer each question `
    ),

  clanMembers: new MessageEmbed()
    .setColor(data.color[1])
    .setDescription(
      `
      ${data.emoji.es} | Envía el tag de cada miembro de tu clan (Uno en cada mensaje)
${data.emoji.us} | Send the tag of each member of your clan (One in each message)
      `
    )
    .setFooter(
      `: 7 / 9 | ${data.emoji.es} Tienes 5 minutos para responder cada pregunta - ${data.emoji.us} You have 5 minutes to answer each question `
    ),

  clanTwitter: new MessageEmbed()
    .setColor(data.color[1])
    .setDescription(
      `
      ${data.emoji.es} | Envia el twitter de tu clan
${data.emoji.us} | Submit your clan's twitter
      `
    )
    .setFooter(
      `: 8 / 9 | ${data.emoji.es} Tienes 5 minutos para responder cada pregunta - ${data.emoji.us} You have 5 minutes to answer each question `
    ),

  clanDescription: new MessageEmbed()
    .setColor(data.color[1])
    .setDescription(
      `
      ${data.emoji.es} | Escribe una breve descripcion de tu clan
${data.emoji.us} | Write a short description of your clan
      `
    )
    .setFooter(
      `: 9 / 9 | ${data.emoji.es} Tienes 5 minutos para responder cada pregunta - ${data.emoji.us} You have 5 minutes to answer each question `
    ),
};

/**
 *
 */
