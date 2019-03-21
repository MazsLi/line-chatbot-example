let linebot = require('linebot');

// 用於辨識 Line Channel 的資訊，一開始在 Heroku 上的設定的 Config Vars
let bot = linebot({
  channelId: process.env.LINE_CHANNEL_ID,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {

  let msg = event.message.text; // 使用者傳送的訊息

  // 回覆訊息給使用者 (一問一答所以是回覆不是推送)
  event.reply(`你說了:${msg}`);
  
});

// Bot 所監聽的 webhook 路徑與 port，heroku 會動態存取 port 所以不能用固定的 port，沒有的話用預設的 port 5000
bot.listen('/', process.env.PORT || 5000, function () {
  console.log('[BOT已準備就緒]');
});