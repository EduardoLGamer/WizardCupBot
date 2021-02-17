const data = require("../data/data.json")

module.exports.timeOver = (channel) => {
  channel.send({
    embed: {
      color: data.color.red,
      description: `${data.emoji.es} Se te acabo tu tiempo\n${data.emoji.us} Your time is over`,
    },
  });
  setTimeout(() => channel.delete(), 2500);
};
