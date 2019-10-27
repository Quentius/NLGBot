const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('This bot is online!');
})

bot.on('message', message => {
    if (message.content === 'fse/help') {
    const help = new Discord.RichEmbed()
       .setTitle('Commands')
       .addField('fse/help', 'Get a list of all commands and their functions')
       .addField('fse/social', 'Get a link to our Twitch page')
       .addField('fse/online', 'See the online time of the bot')
       .addField('fse/teams', 'Show to setup of our teams')
        .addField('fse/sponsors', 'Show ur sponsors')
       .setColor(0x2ECC71)
      message.channel.sendEmbed(help);
    }
    if (message.content === 'fse/social') {
      const social = new Discord.RichEmbed()
      message.channel.sendMessage('Twitter: https://twitter.com/official_fse')
      message.channel.sendMessage('Twitch: https://www.twitch.tv/officialfirestormesports')
      message.channel.sendMessage('Discord: https://discord.gg/CVA4HDT')
      message.channel.sendMessage('YouTube: https://www.youtube.com/channel/UCOJenu3U0OS__ARF49Y9PGQ')
      message.channel.sendMessage('Instagram: https://www.instagram.com/FireStormEsports')
      message.channel.sendMessage('Website: http://firestorm-esports.com')
        .setColor(0x99ff66)
      message.channel.sendEmbed(social)
    }
    if (message.content === 'nlg/online') {
      let totalSeconds = (bot.uptime / 1000);
      let days = Math.floor(totalSeconds / 86400);
      let hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = Math.floor(totalSeconds % 60);
      let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
      const embed = new Discord.RichEmbed()
        .setTitle('Runtime:')
        .addField('The bot has been online for:', uptime)
        .setColor(0xF7FF00)
      message.channel.sendEmbed(embed);
    }
    if (message.content === 'fse/teams') {
      const r6spc = new Discord.RichEmbed()
        .setTitle('Rainbow Six Siege | PC')
        .addField('Location:', 'Europe')
        .addField('Players:', 'Eden, Zeus, Bxsti, Elon, Ballen')
        .addField('Subs:', 'Bihac')
        .setColor(0xFF7400)
      message.channel.sendEmbed(r6spc);
      const r6cx = new Discord.RichEmbed()
        .setTitle('Rainbow Six Siege | XBOX')
        .addField('Location', 'Europe')
        .addField('Players:', 'Death, Pendton, Assassin, Bourney, vTyler')
        .addField('Subs:', 'Blitz')
        .setColor(0x99ccff)
      message.channel.sendEmbed(r6cx);
      const rlx = new Discord.RichEmbed()
        .setTitle('Rocket League | PC')
        .addField('Location', 'Europe')
        .addField('Players:', 'Levi, Wesbry, Pino')
        .addField('Subs:', '-')
        .setColor(0x9966ff)
      message.channel.sendEmbed(rlx);
      const fnc = new Discord.RichEmbed()
        .setTitle('Fortnite | Console')
        .addField('Location', 'North America')
        .addField('Players:', 'Coast, Dread, Krymer')
        .addField('Subs:', '-')
        .setColor(0x9966ff)
      message.channel.sendEmbed(fnc);
    }
    if (message.content === 'fse/sponsors') {
      const fatal = new Discord.RichEmbed()
        .setTitle('Fatal Grips')
        .addField('Since:', 'Oct 27 - 2019')
        .addField('Website:', 'https://fatalgrips.com/')
        .setColor(0xffd633)
      message.channel.sendEmbed(fatal);
      const rogue = new Discord.RichEmbed()  
        .setTitle('Rogue Energy')
        .addField('Since:', 'Oct 27 - 2019')
        .addField('Website:', 'https://rogueenergy.com/?rfsn=3305200.8b5bc5&utm_source=refersion&utm_medium=affiliate&utm_campaign=3305200.8b5bc5')
        .setColor(0x4dffd2)
      message.channel.sendEmbed(rogue);
    }
  })
bot.login(process.env.BOT_TOKEN);
