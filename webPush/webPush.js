const webPush = require("web-push");

webPush.setVapidDetails(
  "mailto:binasusapp@gmail.com",
  PUBLIC_VAPID_KEY,
  PRIVATE_VAPID_KEY
);

module.exports = webPush;
