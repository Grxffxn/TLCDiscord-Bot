const Discord = require("discord.js");
const auth = require("./auth.json");
const { Client, MessageEmbed } = require('discord.js');

const client = new Discord.Client();
const prefix = "$";
//botspam channel id "407425882928578561"

client.on('ready', () => {
  console.log('I am ready!');
});

function getRandomInt(max) {
  return Math.round(Math.random() * Math.floor(max));
}

function AutoMsg() {
  var channel = client.channels.cache.get("407425882928578561");
  if(!channel) return console.log("Not a channel.");
  const automsg1 = new MessageEmbed().setTitle('The Legend Continues | AutoMsg')
    .setColor(0x000080)
    .setDescription('**Have you voted yet today?**\nRun the command `$vote` to vote for rewards\nin-game! Access /fly, /god & more!')
    .setThumbnail('https://i.ibb.co/s5dY0bj/tlclogo.png');
  const automsg2 = new MessageEmbed().setTitle('The Legend Continues | AutoMsg')
    .setColor(0x000080)
    .setDescription('**What is this bot?**\nI am a Discord Bot created to help you!\nI can provide you with helpful links, fun commands,\nand more coming soon!')
    .setThumbnail('https://i.ibb.co/s5dY0bj/tlclogo.png')
    .setFooter('Use the command `$help` to see what I can do!');
  const automsg3 = new MessageEmbed().setTitle('The Legend Continues | AutoMsg')
    .setColor(0x000080)
    .setDescription('**Have you checked stats lately?**\nNathanacus maintains our stats on our website!\nRun the command $stats to see more.')
    .setThumbnail('https://i.ibb.co/s5dY0bj/tlclogo.png')
    .setFooter('Use the command `stats` to see various stats!');
// SWITCH STATEMENT
  switch(getRandomInt(4)) {
    case 0:
      console.log('Zero');
      break;
    case 1:
      channel.send(automsg1);
      console.log('First Msg');
      break;
    case 2:
      channel.send(automsg2);
      console.log('Second Msg');
      break;
    case 3:
      channel.send(automsg3);
      console.log('Third Msg')
      break;
  }
}

setInterval(AutoMsg,7200000);
//1 hour: 3600000

// COMMANDS
client.on("message", function(message) {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
  //const user = message.author.username;

  if(command === "site") {
    const embed = new MessageEmbed().setTitle('The Legend Continues | Site')
      .setColor(0x000080)
      .setDescription('Visit our website [here](https://www.thelegendcontinues.org/).\nView stats, forums, voting links & more!')
      .setURL('https://thelegendcontinues.org/')
      .setThumbnail('https://i.ibb.co/s5dY0bj/tlclogo.png');
    message.channel.send(embed);
  } else if(command === "vote") {
    //somehow connect votifier API so send embeds when players vote
    const embed = new MessageEmbed().setTitle('The Legend Continues | Vote')
      .setColor(0x000080)
      .setDescription('1. [MCCommunity](https://mccommunity.net/server/170-The+Legend+Continues/vote/) \n2. [MC-Servers](https://mc-servers.com/mcvote/1861/) \n3. [PlanetMinecraft](https://www.planetminecraft.com/server/the-legend-continues-2156356/vote/) \n4. [Minecraft Servers](https://minecraftservers.org/vote/61902) \n5. [Minecraft Tracker](https://minecraft-tracker.com/server/6031/vote/) \n6. [Minecraft List](https://minecraftlist.org/vote/8023) \n7. [Minecraft Server](https://minecraft-server.net/vote/tlc/) \n8. [Minecraft Server List](https://minecraft-server-list.com/server/143949/vote/) \n9. [ServerPact](https://www.serverpact.com/vote-38511) \n10. [Minecraft MP](https://minecraft-mp.com/server/35196/vote/)')
      .setURL('https://thelegendcontinues.org/index.php?route=/vote/')
      .setFooter('Run `/vote shop` in-game')
      .setTimestamp()
      .setThumbnail('https://i.ibb.co/s5dY0bj/tlclogo.png');
    message.channel.send(embed);
  } else if(command === "dynmap") {
    const embed = new MessageEmbed().setTitle('The Legend Continues | Dynmap')
      .setColor(0x000080)
      .setURL('https://map.thelegendcontinues.org/')
      .setDescription('View a live map of all of our worlds,\nand even send messages to Minecraft\nfrom the website!')
      .setThumbnail('https://i.ibb.co/s5dY0bj/tlclogo.png');
    message.channel.send(embed);
  } else if(command === "help") {
    const embed = new MessageEmbed().setTitle('The Legend Continues | Help')
      .setColor(0x000080)
      .setDescription('Use the prefix `$` to interact with this bot\n\n**Shortcuts**\n`site` - links directly to TLCs website\n`vote` - list all voting sites\n`dynmap` - view the live map\n`forum` - link directly to our forums\n`stats` - view server & website stats\n`help` - view this message again (why not?)\n\n**Fun Commands**\n`notstaff` - see who is NOT TLC staff\n`karrrot` - personal message from Karrrot')
      .setFooter('Bot created by @Grxffxn#6666 | $donate')
      .setThumbnail('https://i.ibb.co/s5dY0bj/tlclogo.png');
    message.channel.send(embed);
  } else if(command === "donate") {
    const embed = new MessageEmbed().setTitle('The Legend Continues | Donate')
      .setColor(0x000080)
      .setDescription('Visit [our Patreon](https://www.patreon.com/thelegendcontinues) for VIP ranks\n\nFor one-time donations, visit [our PayPal](https://www.paypal.me/thelegendcontinues).')
      .setFooter('Thank you for your interest in supporting TLC')
      .setThumbnail('https://i.ibb.co/s5dY0bj/tlclogo.png');
    message.channel.send(embed);
  } else if(command === "forum") {
    const embed = new MessageEmbed().setTitle('The Legend Continues | Forums')
      .setColor(0x000080)
      .setURL('https://thelegendcontinues.org/index.php?route=/forum/')
      .setDescription('View our discussion threads or create your own!\nView ban appeals, read the latest announcements\nor start a new conversation!')
      .setThumbnail('https://i.ibb.co/s5dY0bj/tlclogo.png');
    message.channel.send(embed);
  }  else if(command === "stats") {
    //more with this later i hope
    const embed = new MessageEmbed().setTitle('The Legend Continues | Stats')
      .setColor(0x000080)
      .setDescription('Click [here](https://thelegendcontinues.org/index.php?route=/stats/) (or the blue title)\n\nView server & player stats online.\n- Online Players\n- Active Players\n- Top Online Time\n- Top Rank Scores')
      .setFooter('Stats created & updated by @Nathanacus#0506')
      .setURL('https://thelegendcontinues.org/index.php?route=/stats/')
      .setThumbnail('https://i.ibb.co/s5dY0bj/tlclogo.png');
    message.channel.send(embed);
  } else if(command === 'karrrot') {
    const embed = new MessageEmbed().setTitle('The Legend Continues | Karrrot')
      .setColor(0x000080)
      .setDescription('I am a poo poo stinkyhead buttface')
      .setThumbnail('https://static.wikia.nocookie.net/minecraft/images/6/63/Carrot_Updated.png/revision/latest?cb=20190721134506');
    message.channel.send(embed);
  } else if(command === 'notstaff') {
    const embed = new MessageEmbed().setTitle('The Legend Continues | Not Staff')
      .setColor(0x000080)
      .setDescription('**1.** Glitch')
      .setThumbnail('https://static.wikia.nocookie.net/minecraft/images/c/c7/GuardianNew.png/revision/latest?cb=20190927024703');
    message.channel.send(embed);
  } else if(command === 'rank') {
    const embed = new MessageEmbed().setTitle('The Legend Continues | Ranks')
      .setColor(0x000080)
      .setDescription('**Rank Commands**\n\n`rank` - bring up this great menu!\n`rank detail` - view your rank stats\n`rank next` - advance to the next rank!\n`rank leaderboard` - view the rank score leaderboard!')
      .setThumbnail('https://i.ibb.co/s5dY0bj/tlclogo.png');
    if(!args.length) {
      return message.channel.send(embed);
    } else if(args[0] === 'detail') {
      return message.reply('This command is not ready yet.\nIssued command: `$rank detail`');
    } else if(args[0] === 'next') {
      return message.reply('This command is not ready yet.\nIssued command: `$rank next`');
    } else if(args[0] === 'leaderboard') {
      return message.reply('This command is not ready yet.\nIssued command: `$rank leaderboard`');
    } else {
      const embed = new MessageEmbed().setTitle('The Legend Continues | Help')
        .setColor(0x000080)
        .setDescription('Use the prefix `$` to interact with this bot\n\n**Shortcuts**\n`site` - links directly to TLCs website\n`vote` - list all voting sites\n`dynmap` - view the live map\n`forum` - link directly to our forums\n`stats` - view server & website stats\n`help` - view this message again (why not?)\n\n**Fun Commands**\n`notstaff` - see who is NOT TLC staff\n`karrrot` - personal message from Karrrot')
        .setFooter('Bot created by @Grxffxn#6666 | $donate')
        .setThumbnail('https://i.ibb.co/s5dY0bj/tlclogo.png');
      message.channel.send(embed);
    }
  }
});

client.login(auth.token);
