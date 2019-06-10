const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('This bot is online!');
})

bot.on('message', message=>{
    if (message.content === 'nlg/training') {
                if(!message.member.roles.find(r => r.name === 'ESL1')) return message.channel.send('You do not have permissions')
                    message.channel.send({embed: {
                        color: 9291032,
                        title: "10-16 June Week",
                        fields: [
                          { name: "Day", value: "Monday\nTuesday\nWednesday\nThursday\nFriday\nSaturday\nSunday Af\nSunday Ev", inline: true},
                          { name: "What", value: "Scrim\nTraining\nScrim\nETraining\nScrim\nScrim\nESL Europe\nCuore", inline: true},
                          {name: 'Time', value: '19:30\n19:00\n20:00\n19:00\n20:00\n19:00\n15:00\n20:15', inline: true},
                        ]
                      }
                    });
        }
        if (message.content === 'nlg/teams') {
                if(!message.member.roles.find(r => r.name === "Moderator")) return message.channel.send("You do not have permissions")
                       const nlg = new  Discord.RichEmbed()
                    .setTitle('No Limits Gaming [1]')
                    .addField('Nationality', 'Europe')
                    .addField('Captains Discord', "@Nick[Ninja]#5302")
                    .addField('Captains Uplay', 'Ninja.NLG')
                    .setColor(0xFF7400)
                    message.channel.sendEmbed(nlg);
                    const nlg1 = new  Discord.RichEmbed()
                    .setTitle('No Limits Gaming [2]')
                    .addField('Nationality', 'Europe')
                    .addField('Captains Discord', "Jimmy Egg#0588")
                    .addField('Captains Uplay', 'Jimmy-Egg.NLG')
                    .setColor(0xFF7400)
                    message.channel.sendEmbed(nlg1);
        }
        if (message.content === 'nlg/help') {
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                    const help = new Discord.RichEmbed()
                    .setTitle('Commands')
                    .addField('nlg/help', 'Get a list of all commands and their functions')
                    .addField('nlg/week', 'See what we are doing this week.')
                    .addField('nlg/discord', 'Get the discord invite link')
                    .addField('nlg/twitter', 'Get a link to our Twitter page')
                    .addField('nlg/youtube', 'Get a link to our YouTube page')
                    .addField('nlg/twitch', 'Get a link to our Twitch page')
                    .addField('nlg/online', 'See the online time of the bot')
                    .addField('nlg/clear', 'Clear a chosen amount of messages')
                    .addField('nlg/esl1', 'Show to setup of NLG 1')
                    .addField('nlg/esl2', 'Show to setup of NLG 2')
                    .setColor(0x2ECC71)
                    message.channel.sendEmbed(help);
        }
            if (message.content === 'nlg/twitter') {
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                    message.channel.sendMessage('https://twitter.com/NoLimitsGaming');
        }
        if (message.content === 'nlg/youtube') {
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                    message.channel.sendMessage('https://www.youtube.com/channel/UC0MdpWpAxgA3sU2OUo9r-ZA')
        }
        if (message.content === 'nlg/twitch') {
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                   message.channel.sendMessage('https://www.twitch.tv/nolimitsgaming')
        }
        if (message.content === 'nlg/discord') {
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                    message.channel.sendMessage('https://discord.gg/XjjVsqF')
        }
        if (message.content === 'nlg/online') {
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
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
        if (message.content === 'nlg/esl1') {
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                    const esl1 = new Discord.RichEmbed()
                    .setTitle('ESL 1 Setup:')
                    .addField('Coach:', 'LagGrenade.NLG')
                    .addField('IGL:', 'Ninja.NLG')
                    .addField('Main:', 'Lortboy.NLG, Angor.NLG, Jubiman.NLG, Stofzuig.NLG')
                    .addField('Sub:', 'King.NLG, Jimmy-Egg.NLG')
                    .setColor(0x0FFEC)
                    message.channel.sendEmbed(esl1);
        }
        if (message.content === 'nlg/esl2') {
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                   const esl2 = new Discord.RichEmbed()
                    .setTitle('ESL 2 Setup:')
                    .addField('Coach:', 'N/A')
                    .addField('IGL:',  'Ecaron.NLG')
                    .addField('Main:', 'Cha0s.NLG, Reniplay.NLG, R4mbo.NLG, Reklas.NLG')
                    .addField('Sub:', 'ParadoX.NLG, Tim.NLG')
                    .setColor(0xFF0087)
                    message.channel.sendEmbed(esl2);
        }
})
bot.login(process.env.BOT_TOKEN);

