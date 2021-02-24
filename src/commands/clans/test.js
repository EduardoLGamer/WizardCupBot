module.exports = {
  name: "test",
  aliases: [],
  category: "",
  description: "Este comando sirve para ",
  run: async (bot, message, args) => {
    const a = await message.guild.members.resolve(args.join(" "));
    console.log(a);
  },
};
