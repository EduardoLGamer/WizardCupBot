const secret = require("../data/secret.json");

module.exports = {
  twitterInfo: {
    consumer_key: secret.Twitter.consumerKey,
    consumer_secret: secret.Twitter.consumerSecret,
    access_token: secret.Twitter.accesToken,
    access_token_secret: secret.Twitter.accesTokenSecret,
    timeout_ms: 60 * 1000,
    strictSSL: true,
  },
};
