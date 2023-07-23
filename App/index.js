const { Telegraf } = require('telegraf');

const bot = new Telegraf("6046742920:AAEyZfE2-tae8DTBQcEJhwt4Y_hxuZjUtT8");

bot.start((ctx) => ctx.reply("Welcome to RSQSI bot /bsSearch"));

bot.command("bsSearch", (ctx) => ctx.reply("binary haha"));

bot.launch()