const twit = require("twit");

const data = require("../../data/data.json");
const { twitterInfo } = require("../../util/twitterInfo");
const config = require("../../data/config.json");

module.exports =
  ("ready",
  (bot) => {
    setInterval(() => {
      const status = data.status;
      bot.user.setPresence({
        status: "online",
        activity: {
          url: null,
          type: "PLAYING",
          name: status[Math.floor(Math.random() * status.length)],
        },
      });
    }, 15000);

    const Twit = new twit(twitterInfo);

    const stream = Twit.stream("statuses/filter", {
      follow: [config.twitterUserID],
    });

    stream.on("tweet", (tweet) => {
      const url = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`;

      const channel = bot.channels.cache.get(config.twitterChannel);

      channel.send(url);
    });
  });
