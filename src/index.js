const Discord = require("discord.js");
const { readdirSync } = require("fs");
const colors = require("colors");
const express = require("express");

const config = require("./data/config.json");
const secret = require("./data/secret.json");

require("dotenv").config();

const bot = new Discord.Client();

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.categories = new Discord.Collection();

["command", "event"].forEach((handler) => {
  require(`./handlers/${handler}`)(bot);
});

bot.login(secret.Discord.token).then(() => {
  console.log("[INFO] Bot started successfully".green);
});
